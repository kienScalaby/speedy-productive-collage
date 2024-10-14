import { COLLAGE_TEMPLATES_4_SQUARE } from "@/constants/canvasConfig";
import { useAppSelector } from "@/redux/hooks";
import { RootStateType } from "@/redux/store";

function useCanvasData() {
  const canvas = useAppSelector((state: RootStateType) => state.canvas.canvas);

  return { canvas };
}

function useImageData() {
  const imageCount = useAppSelector(
    (state: RootStateType) => state.imagesState.images
  ).reduce((count, arr) => count + arr.length, 0);
  const maxImageUploads = useAppSelector(
    (state: RootStateType) =>
      COLLAGE_TEMPLATES_4_SQUARE[state.canvas.template]!.config
  ).length;
  const selectedImageIndex = useAppSelector(
    (state: RootStateType) => state.imagesState.selectedImageIndex
  );
  const images = useAppSelector(
    (state: RootStateType) => state.imagesState.images
  );

  return {
    images,
    selectedImageIndex,
    imageCount,
    maxImageUploads,
  };
}

function useCanvasConfigData(templateIndex?: number) {
  const activeTemplates = useAppSelector(
    (state: RootStateType) => state.canvas.templates
  );
  const activeTemplateIndex = useAppSelector(
    (state: RootStateType) => state.canvas.template
  );
  const activeRatioIndex = useAppSelector(
    (state: RootStateType) => state.canvas.ratio
  );
  const activeTemplate = COLLAGE_TEMPLATES_4_SQUARE[templateIndex || 0];

  return {
    activeTemplates,
    activeRatioIndex,
    activeTemplateIndex,
    activeTemplate,
  };
}

export { useCanvasData, useCanvasConfigData, useImageData };
