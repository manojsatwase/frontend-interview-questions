import { configureStore } from "@reduxjs/toolkit";
import toggleThemeSlice from "./themeSlice/toggleThemeSlice";

export const store = configureStore({
    reducer:{
        theme:toggleThemeSlice
    }
})