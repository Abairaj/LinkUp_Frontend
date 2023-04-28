import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    ApiURL:'http://127.0.0.1:8000'
}

export const ApiURLReducer = createReducer(initialState,(builder)=>{

    return initialState
})