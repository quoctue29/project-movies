import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { quanLyPhimReducers } from "./quanLyPhim";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung";

const rootReducer = combineReducers({
  quanLyPhimReducers,
  quanLyNguoiDungReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
