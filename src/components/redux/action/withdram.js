import axios from "axios";
import { server } from "../../../server";

// get all of user
export const getAllWithdram = () => async (dispatch) => {
  try {
    dispatch({
      type: "getwithdramAllRequest",
    });
    const { data } = await axios.get(`${server}/api/withdram-all`);

    dispatch({
      type: "getwithdramAllSuccess",
      payload: data.serachWithdram,
    });
  } catch (error) {
    dispatch({
      type: "getwithdramAllFailed",
      payload: error.response.data.message,
    });
  }
};
export const getDetailWithdram = (wid) => async (dispatch) => {
  try {
    dispatch({
      type: "getwithdramDetailRequest",
    });
    const { data } = await axios.get(`${server}/api/withdram-detail/${wid}`);
    dispatch({
      type: "getwithdramDetailSuccess",
      payload: data.DetailWithdram,
    });
  } catch (error) {
    dispatch({
      type: "getwithdramDetailFailed",
      payload: error.response.data.message,
    });
  }
};
