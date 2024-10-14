import { configureStore } from "@reduxjs/toolkit";

import canvasReducer from "./canvasSlice";
import imagesReducer from "./imageSlice";

const store = configureStore({
  reducer: {
    canvas: canvasReducer,
    imagesState: imagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// To easily set state type - `state: RootState`
export type RootStateType = ReturnType<typeof store.getState>;

// To easily use dispath type via ./hooks
export type AppDispatch = typeof store.dispatch;

export default store;
