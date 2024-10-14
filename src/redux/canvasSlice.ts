import { COLLAGE_TEMPLATES_4_SQUARE } from "@/constants/canvasConfig";
import { CanvasStateType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Canvas } from "fabric";

const TemplateDefault = COLLAGE_TEMPLATES_4_SQUARE.reduce(function (
  a: number[],
  e,
  i
) {
  if (e.default) a.push(i);
  return a;
},
[]);

const defaultState: CanvasStateType = {
  canvas: null,
  ratio: 0,
  template: 1,
  templates: TemplateDefault,
  tab: "template",
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState: defaultState,
  reducers: {
    addTemplates: (state, action: PayloadAction<number[]>) => {
      state.templates = [...action.payload];
    },
    changeTemplateByIndex: (state, action: PayloadAction<number>) => {
      state.template = action.payload;
    },
    changeRatioByIndex: (state, action: PayloadAction<number>) => {
      state.ratio = action.payload;
    },
    setCanvas: (state, action: PayloadAction<Canvas>) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.canvas = action.payload;
    },
  },
});

export const {
  addTemplates,
  changeTemplateByIndex,
  changeRatioByIndex,
  setCanvas,
} = canvasSlice.actions;

export default canvasSlice.reducer;
