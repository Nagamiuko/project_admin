import axios from "axios";
import { server } from "../../../server";

// get all of user
export const getAllProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: "getProductAllRequest",
    });
    const { data } = await axios.get(`${server}/api/book-all-admin`);

    dispatch({
      type: "getProductAllSuccess",
      payload: data.books,
    });
  } catch (error) {
    dispatch({
      type: "getProductAllFailed",
      payload: error.response.data.message,
    });
  }
};
export const getAllUserProduct = (userid) => async (dispatch) => {
  try {
    dispatch({
      type: "getProductUserAllRequest",
    });
    const { data } = await axios.get(`${server}/api/users/book-all/${userid}`);

    dispatch({
      type: "getProductUserAllSuccess",
      payload: data.Data,
    });
  } catch (error) {
    dispatch({
      type: "getProductUserAllFailed",
      payload: error.response.data.message,
    });
  }
};

export const getDetailProduct = (bookid) => async (dispatch) => {
  try {
    dispatch({
      type: "getProductDetailRequest",
    });
    const { data } = await axios.get(`${server}/api/book-detail-admin/${bookid}`);

    dispatch({
      type: "getProductDetailSuccess",
      payload: data.Data,
    });
  } catch (error) {
    dispatch({
      type: "getProductDetailFailed",
      payload: error.response.data.message,
    });
  }
};

export const getProductChapter = (bookid) => async (dispatch) => {
  try {
    dispatch({
      type: "getProductChapterRequest",
    });
    const { data } = await axios.get(`${server}/api/book-chapter-all-admin/${bookid}`);

    dispatch({
      type: "getProductChapterSuccess",
      payload: data.bookchapter,
    });
  } catch (error) {
    dispatch({
      type: "getProductChapterFailed",
      payload: error.response.data.message,
    });
  }
};
