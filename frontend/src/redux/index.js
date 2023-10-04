import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSlideReducer from "./productSlide";

const store = configureStore({
  reducer: {      
    user : userSliceReducer,
    product : productSlideReducer
    
  },
});
export default store;
