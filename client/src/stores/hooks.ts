import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import type { RootState, AppDispatch } from "./store";

// Typed dispatch untuk Redux Thunk
export const useAppDispatch: () => AppDispatch = useDispatch;

// Typed selector untuk RootState ABN Website
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
