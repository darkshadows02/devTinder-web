import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import ConnectionReduecr from "./connectionSlice"
 const appStore =configureStore({
      reducer:{
      user:userReducer,
      feed:feedReducer,
      connections:ConnectionReduecr
      },
})

export default appStore;