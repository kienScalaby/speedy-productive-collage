import { IItemSelected, ImageStateType, UploadedImg } from "@/types";
import { generateUUID } from "@/utils/generateId";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_ITEM = 1;
const initStructure = Array.from({ length: DEFAULT_ITEM }, () =>
  Array.from({ length: 4 }, () => ({ id: generateUUID() }))
);

const defaultState: ImageStateType = {
  selectedImageIndex: null,
  images: initStructure,
};

export type INewGroup = {
  group: UploadedImg[];
};

export type IUpdateImage = {
  imageId: string;
  imageValue: UploadedImg;
};

export type ISelectImage = {
  imageId: string;
};

export type IDeleteImage = {
  imageId: string;
};

export const selectedImageSlice = createSlice({
  name: "imagesState",
  initialState: defaultState,
  reducers: {
    newGroup: (state, action: PayloadAction<INewGroup>) => {
      state.images = [...state?.images, action.payload.group];
    },
    updateImage: (state, action: PayloadAction<IUpdateImage>) => {
      const { imageId, imageValue } = action.payload;

      const newPayload = state.images.map((group) => {
        return group.map((item) => {
          return item.id === imageId ? imageValue : item;
        });
      });

      state.images = newPayload;
    },
    setSelectedImage: (state, action: PayloadAction<ISelectImage>) => {
      const { imageId } = action.payload;
      let selectedIndex: IItemSelected | null = null;

      state.images.some((group, groupIndex) => {
        const itemIndex = group.findIndex((item) => item.id === imageId);

        if (itemIndex !== -1) {
          selectedIndex = { groupIndex, itemIndex };
          return true;
        }

        return false;
      });

      state.selectedImageIndex = selectedIndex;
    },
    clearSelectedImage: (state, action: PayloadAction<IDeleteImage>) => {
      const { imageId } = action.payload;
      const newPayload = state.images.map((group) => {
        return group.map((item) => {
          return item.id === imageId ? { id: imageId } : item;
        });
      });

      state.images = newPayload;
      state.selectedImageIndex = null;
    },
    clearAllImages: (state) => {
      state.selectedImageIndex = null;
      state.images = [];
    },
  },
});

export const {
  newGroup,
  updateImage,
  setSelectedImage,
  clearSelectedImage,
  clearAllImages,
} = selectedImageSlice.actions;

export default selectedImageSlice.reducer;
