import axios from "axios";
import { server } from "../../../server";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  Loading: true,
};

export const getWithdramAll = createReducer(initialState, {
  // get user withdram
  getwithdramAllRequest: (state) => {
    state.isLoading = true;
  },
  getwithdramAllSuccess: (state, action) => {
    state.isLoading = false;
    state.withdram = action.payload;
  },
  getwithdramAllFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  // get withdram detail
  getwithdramDetailRequest: (state) => {
    state.Loading = true;
  },
  getwithdramDetailSuccess: (state, action) => {
    state.Loading = false;
    state.detailwith = action.payload;
  },
  getwithdramDetailFailed: (state, action) => {
    state.Loading = false;
    state.error = action.payload;
  },
  
  clearErrors: (state) => {
   state.error = null;
 },

});
