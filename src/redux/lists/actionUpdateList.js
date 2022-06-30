import axios from "axios";
import Toastify from "../../utils/tostify";
import { actionLists } from "./actionLists";
const fetchListsRequest = () => {
  return {
    type: "FETCH_LISTS_REQUEST",
  };
};

export const actionUpdateList = (body) => {
  let headers = {
    "Content-type": "application/json; charset=UTF-8",
  };

  return (dispatch) => {
    dispatch(fetchListsRequest());

    axios
      .put(`https://jsonplaceholder.typicode.com/posts/1`, body, { headers })
      .then((response) => {
        if (response.status === 200) {
          Toastify.success("با موفقیت انجام شد");
          dispatch(actionLists());
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log("error", error);
      });
  };
};
