import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStateType } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// To avoid typescript warnings!
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
