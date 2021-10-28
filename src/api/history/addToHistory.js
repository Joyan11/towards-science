/** @format */

import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";

export const addToHistory = async (videoData, dispatchgeneral, token) => {
  toastMessages("Please wait...");
  try {
    const {
      status,
      data: {
        success,
        historyData: { videos },
      },
    } = await axios.post(`https://videoLibraryServer.joyan11.repl.co/history`, {
      videos: videoData,
    });

    if (status === 201 && success === true) {
      dispatchgeneral({ type: "ADD_TO_HISTORY", payload: videos });
    }
  } catch (error) {
    console.log(error.stack);
    console.log(error.message);
  }
};
