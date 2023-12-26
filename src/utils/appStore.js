import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
    reducer :{
        cart : cartSlice,
        user : userReducer
    }
});

export default appStore;
