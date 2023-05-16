import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  ApiURL: import.meta.env.VITE_API_URL,
};

export const ApiURLReducer = createReducer(initialState, (builder) => {
  return initialState;
});
