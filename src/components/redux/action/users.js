import axios from "axios";
import { server } from "../../../server";

// get all of user
export const getAllOfUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllUserRequest",
    });
    const { data } = await axios.get(`${server}/api/users`);

    dispatch({
      type: "getAllUserSuccess",
      payload: data.datauser,
    });
  } catch (error) {
    dispatch({
      type: "getAllUserFailed",
      payload: error.response.data.message,
    });
  }
};
export const getDetailOfUser = (userid) => async (dispatch) => {
  try {
    dispatch({
      type: "getDetailUserRequest",
    });
    const { data } = await axios.get(`${server}/api/users/${userid}`);

    dispatch({
      type: "getDetailUserSuccess",
      payload: data.datauser,
    });
  } catch (error) {
    dispatch({
      type: "getDetailUserFailed",
      payload: error.response.data.message,
    });
  }
};
