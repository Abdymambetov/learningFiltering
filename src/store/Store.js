import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./SearchSlice";
import UserReducer from "./UserSlice";
export const store =configureStore({reducer:{
    search:SearchReducer,
    regis: UserReducer
}})