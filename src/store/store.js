import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slice/setTheme";

const store = configureStore({
    reducer:{
       theme:themeReducer
    }
})

export default store