import axios from "axios";
import { server } from "../../../server";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const getProductAll = createReducer(initialState, {
  // get user
  getProductAllRequest: (state) => {
    state.isLoading = true;
  },
  getProductAllSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  getProductAllFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  
  // get user
  getProductAllRequest: (state) => {
    state.isLoading = true;
  },
  getProductAllSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  getProductAllFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all book user 
  getProductUserAllRequest: (state) => {
    state.isLoading = true;
  },
  getProductUserAllSuccess: (state, action) => {
    state.isLoading = false;
    state.productu = action.payload;
  },
  getProductUserAllFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  // get book detail 
  getProductDetailRequest: (state) => {
    state.isLoading = true;
  },
  getProductDetailSuccess: (state, action) => {
    state.isLoading = false;
    state.detailbook = action.payload;
  },
  getProductDetailFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  // get book chapter 
  getProductChapterRequest: (state) => {
    state.isLoading = true;
  },
  getProductChapterSuccess: (state, action) => {
    state.isLoading = false;
    state.bookchapter = action.payload;
  },
  getProductChapterFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  
  clearErrors: (state) => {
   state.error = null;
 },

});
