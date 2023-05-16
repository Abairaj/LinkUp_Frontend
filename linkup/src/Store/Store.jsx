import { configureStore } from "@reduxjs/toolkit";
import { ApiURLReducer } from "./Reducers/ApiURLReducer";
import UserProfileReducer from "./Reducers/UserProfileReducer";
import ShareSuccessReducer from "./Reducers/ShareSuccessReducer";

const store = configureStore({
  reducer: {
    ApiURL: ApiURLReducer,
    User: UserProfileReducer,
    share_success: ShareSuccessReducer,
  },
});

export default store;
