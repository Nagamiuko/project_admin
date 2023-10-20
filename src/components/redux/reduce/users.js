import axios from "axios";
import { server } from "../../../server";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const getUserAll = createReducer(initialState, {
  // get user
  getAllUserRequest: (state) => {
    state.isLoading = true;
  },
  getAllUserSuccess: (state, action) => {
    state.isLoading = false;
    state.users = action.payload;
  },
  getAllUserFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  getDetailUserRequest: (state) => {
    state.isLoading = true;
  },
  getDetailUserSuccess: (state, action) => {
    state.isLoading = false;
    state.detailu = action.payload;
  },
  getDetailUserFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  
  clearErrors: (state) => {
   state.error = null;
 },

});
