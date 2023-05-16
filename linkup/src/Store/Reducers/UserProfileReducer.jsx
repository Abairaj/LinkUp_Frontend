import { createReducer } from "@reduxjs/toolkit";
import { UserProfileAction } from "../Actions/UserProfileAction";

const initialState = {
  User: {},
};

const UserProfileReducer = createReducer(initialState, (builder) => {
  builder.addCase(UserProfileAction, (state, action) => {
    return {
      ...state,
      User: action.payload,
    };
  });
});

export default UserProfileReducer;
