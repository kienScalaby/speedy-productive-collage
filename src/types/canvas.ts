import type { Canvas } from "fabric";

import type { SelectedTabType } from "@/types/tab";

export type RectFabricFunctionType = (
  CANVAS_HEIGHT: number,
  CANVAS_WIDTH: number
) => {
  fill: string;
  height: number;
  width: number;
  absolutePositioned: boolean;
  hoverCursor: string;
  top?: number;
  left?: number;
};

export type RectConfigType = {
  rectFabric: RectFabricFunctionType;
  scaleTo: "width" | "height";
};

export type CollageTemplateType = {
  name: string;
  icon: string;
  default?: boolean;
  config: RectConfigType[];
};

export type AspectRatioType = {
  name: string;
  nickname: string;
  icon: string;
  getCanvasSize: (
    WIDTH: number,
    HEIGHT: number
  ) => {
    width: number;
    height: number;
  };
};

export interface CanvasStateType {
  canvas: Canvas | null;
  ratio: number;
  template: number;
  templates: number[];
  tab: SelectedTabType;
}
