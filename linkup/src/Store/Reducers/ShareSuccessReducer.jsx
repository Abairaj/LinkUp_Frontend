import { createReducer } from "@reduxjs/toolkit";
import { shareSuccessAction } from "../Actions/ShareSuccessAction";

const initialState = {
  state: true,
};

const ShareSuccessReducer = createReducer(initialState, (builder) => {
  builder.addCase(shareSuccessAction, (state, action) => {
    return {
      ...state,
      state: action.payload,
    };
  });
});

export default ShareSuccessReducer;
