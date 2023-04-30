import { configureStore } from "@reduxjs/toolkit";
import { ApiURLReducer } from "./Reducers/ApiURLReducer";
import UserProfileReducer from "./Reducers/UserProfileReducer";

const store = configureStore({
  reducer: {
    ApiURL: ApiURLReducer,
    User: UserProfileReducer,
  },
});

export default store;
