import { Canvas } from "fabric";

import {
  addTemplates,
  changeRatioByIndex,
  setCanvas,
} from "@/redux/canvasSlice";
import { useAppDispatch } from "@/redux/hooks";
import {
  clearAllImages,
  clearSelectedImage,
  IDeleteImage,
  INewGroup,
  ISelectImage,
  IUpdateImage,
  newGroup,
  setSelectedImage,
  updateImage,
} from "@/redux/imageSlice";
import type { UploadedImg } from "@/types";

function useUploadImage() {
  const dispatch = useAppDispatch();
  const newGroupImage = (payload: INewGroup) => {
    dispatch(newGroup(payload));
  };
  const uploadImage = (payload: IUpdateImage) => {
    dispatch(updateImage(payload));
  };
  const selectImage = (payload: ISelectImage) => {
    dispatch(setSelectedImage(payload));
  };
  const clearImageSelected = (payload: IDeleteImage) => {
    dispatch(clearSelectedImage(payload));
  };
  const clearImageAll = () => {
    dispatch(clearAllImages());
  };
  return {
    newGroupImage,
    uploadImage,
    selectImage,
    clearImageSelected,
    clearImageAll,
  };
}

function useRatioAction() {
  const dispatch = useAppDispatch();
  const changeRatio = (index: number) => {
    dispatch(changeRatioByIndex(index));
    dispatch(clearAllImages());
  };
  return { changeRatio };
}

function useTemplateAction() {
  const dispatch = useAppDispatch();
  const addTemplate = (index: number[]) => {
    dispatch(addTemplates(index));
  };
  return { addTemplate };
}

function useCanvasAction() {
  const dispatch = useAppDispatch();
  const addImageAction = (imagePayload: UploadedImg) => {
    dispatch(
      updateImage({ imageId: imagePayload?.id, imageValue: imagePayload })
    );
  };
  const setCanvasAction = (canvas: Canvas) => {
    dispatch(setCanvas(canvas));
  };

  return {
    addImageAction,
    setCanvasAction,
  };
}

export { useCanvasAction, useRatioAction, useTemplateAction, useUploadImage };
