import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "@/slices/menuSlice";
import ToolboxReducer from "@/slices/toolboxSlice";

export const store = configureStore({
  reducer: {
    menu: MenuReducer,
    toolbox: ToolboxReducer,
  },
});
