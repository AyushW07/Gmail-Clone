import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userReducer from "../features/mailSlice";

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
