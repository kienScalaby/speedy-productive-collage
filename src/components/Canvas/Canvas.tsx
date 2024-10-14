"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import ImgsViewer from "react-images-viewer";

import { ASPECT_RATIOS, OBJECT_LOCKED } from "@/constants/canvasConfig";
import { useCanvasAction, useUploadImage } from "@/hooks/useReduxAction";
import { useCanvasConfigData } from "@/hooks/useReduxData";
import { CustomImageObject, UploadedImg } from "@/types";
import { BsEye } from "react-icons/bs";

export const CANVAS_SIZE = { width: 250, height: 250 };
type IProps = {
  group?: UploadedImg[];
  templateIndex: number;
  groupIndex: number;
};

type IImagesCanvas = {
  groupIndex: number;
  templateIndex: number;
  src: string;
};

export default function Canvas(props: IProps) {
  const { group, templateIndex, groupIndex } = props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  // Get necessary Redux data via hooks
  const { activeRatioIndex, activeTemplate } =
    useCanvasConfigData(templateIndex);
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  const { setCanvasAction } = useCanvasAction();
  const { selectImage } = useUploadImage();
  const [imagesCanvas, setImagesCanvas] = useState<IImagesCanvas[]>([]);

  const handlePreviewCanvas = ({
    templateIndex,
    groupIndex,
  }: {
    groupIndex: number;
    templateIndex: number;
  }) => {
    if (!imagesCanvas?.length) return;
    const indexImage: number = imagesCanvas?.findIndex(
      (item) =>
        item?.groupIndex == groupIndex && item?.templateIndex == templateIndex
    );

    setCurrImg(indexImage!);
    setIsOpen(true); // Mở viewer khi có hình ảnh
  };

  // Hàm để cập nhật imagesCanvas sau khi canvasRef thay đổi
  const updateImagesCanvas = useCallback(() => {
    const newImages: IImagesCanvas[] = [];
    const canvases = document.querySelectorAll(`canvas[data-preview='true']`);
    // Iterate through all image groups
    canvases.forEach((cv) => {
      const group = cv.getAttribute("data-group");
      const format = cv.getAttribute("data-format");
      const originalCanvas = document.querySelector(
        `canvas[data-group="${group}"][data-format="${format}"]`
      ) as HTMLCanvasElement | null;

      if (originalCanvas) {
        // Get the device pixel ratio (DPR)
        const dpr = window.devicePixelRatio || 1;

        // Create an offscreen canvas for resizing
        const resizedCanvas = document.createElement("canvas");
        const ctx = resizedCanvas.getContext("2d");

        // Set the new size to 800x800 with the DPR taken into account
        const targetWidth = 250;
        const targetHeight = 250;
        resizedCanvas.width = targetWidth * dpr;
        resizedCanvas.height = targetHeight * dpr;
        resizedCanvas.style.width = `${targetWidth}px`;
        resizedCanvas.style.height = `${targetHeight}px`;

        if (ctx) {
          // Scale the context to compensate for the high DPR and avoid blurriness
          ctx.scale(dpr, dpr);

          // Draw the original canvas content onto the resized canvas with sharp scaling
          ctx.drawImage(originalCanvas, 0, 0, targetWidth, targetHeight);

          // Convert the resized canvas to a data URL
          const dataUrl = resizedCanvas.toDataURL("image/png");
          newImages.push({
            groupIndex: Number(group),
            templateIndex: Number(format),
            src: dataUrl,
          });
          // Add the resized image to the zip (using base64 data)
        }
      }
    });

    setImagesCanvas(newImages);
  }, []);

  // useEffect sẽ lắng nghe thay đổi của canvasRef để cập nhật lại imagesCanvas
  useEffect(() => {
    if (canvasRef.current) {
      // Sau khi canvasRef render, cập nhật lại imagesCanvas
      setTimeout(() => {
        updateImagesCanvas();
      }, 500); // Timeout để đảm bảo canvas đã render trước khi cập nhật
    }
  }, [canvasRef, group, updateImagesCanvas]);

  useEffect(() => {
    if (canvasRef.current && wrapperRef.current) {
      // 0. Calculate canvas ratio by initial client width
      const ratio = ASPECT_RATIOS[activeRatioIndex]!.getCanvasSize(
        CANVAS_SIZE?.width,
        CANVAS_SIZE?.height
      );

      // 1. Setup canvas
      const canvas = new fabric.Canvas(canvasRef.current, {
        backgroundColor: "#1a1a1a",
        width: ratio.width,
        height: ratio.height,
        selection: false,
        controlsAboveOverlay: false,
        allowTouchScrolling: true,
        imageSmoothingEnabled: false,
      });

      // 1.1 Clone canvas
      setCanvasAction(canvas);

      // 2. Setup objects & its properties
      activeTemplate?.config.forEach((config, index) => {
        const revertIndex2and3 = index === 2 ? 3 : index === 3 ? 2 : index;
        const PROPERTIES = config.rectFabric(ratio.height, ratio.width);
        const cell = new fabric.Rect(PROPERTIES).set(OBJECT_LOCKED);
        if (!group) return;
        const handleImageUpload = (selectedCell: fabric.Rect) => {
          if (!group[revertIndex2and3]?.file) return;

          // Load image as fabric image
          const addImage = async (imageBase64: string) => {
            const img = await fabric.Image.fromURL(imageBase64);
            const imgId = `img_${new Date().getTime()}`;

            // Set position to selected cell
            img.set({
              id: imgId,
              left: selectedCell.left,
              top: selectedCell.top,
              selectable: true,
              hasControls: true,
              // clipPath: selectedCell,
              perPixelTargetFind: true,
            }) as CustomImageObject;

            // Scale accordingly to look good
            if (config.scaleTo === "width") {
              img.scaleToWidth(selectedCell.width + 1);
            } else if (config.scaleTo === "height") {
              img.scaleToHeight(selectedCell.height + 1);
            }

            canvas.add(img);
            // canvas.setActiveObject(img);
          };
          addImage(group[revertIndex2and3]?.file);
          // Render in canvas
          canvas.remove(selectedCell);
          canvas.renderAll();

          // Switch to More tab, to show controls on active object
          // changeTabAction("more");
        };

        handleImageUpload(cell);
        // 5. Render
        canvas.add(cell);
      });

      // 6. Render all looped objects
      canvas.renderAll();

      // 7. Attach event handler on object selection
      const handleImageSelect = (selected: CustomImageObject) => {
        // Set selected image
        selectImage({ imageId: selected.id });
      };

      canvas.on("selection:created", ({ selected }) => {
        handleImageSelect(selected[0] as CustomImageObject);
      });

      canvas.on("selection:updated", ({ selected }) => {
        handleImageSelect(selected[0] as CustomImageObject);
      });

      canvas.on("selection:cleared", () => {
        updateImagesCanvas();
      });

      // Lắng nghe các sự kiện thay đổi trên canvas
      canvas.on("object:modified", () => {
        // rerender canvas
        updateImagesCanvas();
      });

      // Unselect active image event handler
      const unselectObject = (e: MouseEvent) => {
        // Only target parent element
        if (e.target === wrapperRef.current) {
          canvas.discardActiveObject();
          canvas.renderAll();
        }
      };

      // Attach handler
      wrapperRef.current.addEventListener("click", unselectObject);

      // 8. Clean up the canvas when the component unmounts
      return () => {
        wrapperRef.current?.removeEventListener("click", unselectObject);
        canvas.dispose();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);

  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center justify-center border-b py-3"
      style={{
        height: CANVAS_SIZE.height + 37,
        width: CANVAS_SIZE.width + 37,
      }}
    >
      <button
        onClick={() =>
          handlePreviewCanvas({
            groupIndex: groupIndex,
            templateIndex: templateIndex,
          })
        }
        className="absolute right-6 top-6 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffffff9b]"
      >
        <BsEye className="w-[18px] max-w-[24px] text-[#356bf3]" />
      </button>
      <canvas
        data-preview={true}
        data-group={groupIndex}
        data-format={templateIndex}
        className="border"
        style={{
          height: CANVAS_SIZE.height,
          width: CANVAS_SIZE.width,
        }}
        ref={canvasRef}
      />
      <ImgsViewer
        imgs={imagesCanvas
          ?.filter((item) => item?.src)
          ?.map((item) => ({
            src: item?.src,
          }))}
        currImg={currImg}
        showThumbnails={true}
        isOpen={isOpen}
        onClickPrev={() => setCurrImg(currImg - 1)}
        onClickNext={() => setCurrImg(currImg + 1)}
        onClickThumbnail={(index: number) => setCurrImg(index)}
        onClose={() => setIsOpen(false)}
      />
      <div className="fixed top-0 hidden"></div>
    </div>
  );
}
