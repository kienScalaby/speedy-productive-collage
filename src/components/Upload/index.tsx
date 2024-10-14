import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useUploadImage } from "@/hooks/useReduxAction";
import { BsTrash, BsUpload } from "react-icons/bs";
import { CANVAS_SIZE } from "../Canvas/Canvas";

type IProps = {
  id: string;
  file?: string;
  onPreview: () => void;
};

function Upload(props: IProps) {
  const { id, file, onPreview } = props;
  const [imageSrc, setImageSrc] = useState("");
  const { uploadImage, clearImageSelected } = useUploadImage();

  const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageSrc(URL?.createObjectURL(event.target.files[0]));
    }
  };

  const handlePaste = async () => {
    try {
      if (!navigator.clipboard) {
        toast.error("Clipboard API not available");
        return;
      }

      const clipboardItems = await navigator.clipboard.read();
      for (const clipboardItem of clipboardItems) {
        const imageTypes = clipboardItem.types.find((type) =>
          type.startsWith("image/")
        );

        if (imageTypes) {
          const blob = await clipboardItem.getType(imageTypes);
          const url = URL.createObjectURL(blob);
          setImageSrc(url);
          break; // Assuming we need the first image
        }
      }
    } catch (err) {
      console.error("Failed to read clipboard:", err);
    }
  };

  const handleDelete = () => {
    clearImageSelected({ imageId: id });
    setImageSrc("");
  };

  useEffect(() => {
    if (imageSrc) {
      toast.success("Image successfully added.", {
        id: "toast-uploaded",
      });
      uploadImage({
        imageId: id,
        imageValue: {
          id: id,
          file: imageSrc,
          filters: {
            brightness: 0,
            contrast: 0,
            noise: 0,
            saturation: 0,
            vibrance: 0,
            blur: 0,
          },
        },
      });
    }
  }, [imageSrc]);

  useEffect(() => {
    if (!file) return;
    setImageSrc(file);
  }, [file]);

  return (
    <div
      className="relative h-full w-full border"
      style={{ height: CANVAS_SIZE.height / 2 }}
    >
      <div className="flex h-full items-center justify-center gap-2 px-3">
        <div className="h-2/3 w-2/3 min-w-[60px] border" onPaste={handlePaste}>
          {imageSrc && (
            <img
              onClick={onPreview}
              className="z-50 h-full w-full"
              src={imageSrc}
              alt="Pasted"
            />
          )}
        </div>
        {imageSrc ? (
          <button onClick={handleDelete}>
            <BsTrash className="w-[18px] max-w-[24px] text-[#f22f2f]" />
          </button>
        ) : (
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              name="image"
              id="file"
              className="absolute z-50 h-[full] w-full opacity-0"
              onChange={loadFile}
            />
            <BsUpload className="w-[32px] max-w-[24px] cursor-pointer text-[#7198e8]" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;
