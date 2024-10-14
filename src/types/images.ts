import type { Image } from "fabric";

export type CustomImageObject = Image & {
  id: string;
};

export interface UploadedImg {
  id: string;
  file?: string;
  filters?: {
    brightness: number;
    contrast: number;
    noise: number;
    saturation: number;
    vibrance: number;
    blur: number;
  };
}

export interface IItemSelected {
  groupIndex: number;
  itemIndex: number;
}
export interface ImageStateType {
  selectedImageIndex: IItemSelected | null;
  images: UploadedImg[][];
}

export interface ImageFilterUpdate {
  imageIndex: number;
  filterType: string;
  filterValue: number;
}
