import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";

export const addToHistory = async (historyId, videoData, dispatchgeneral) => {
  try {
    const {
      status,
      data: {
        success,
        historyData: { _id: historyid, videos },
      },
    } = await axios.post(
      historyId === null
        ? `https://videoLibraryServer.joyan11.repl.co/history`
        : `https://videoLibraryServer.joyan11.repl.co/history/${historyId}`,
      {
        videos: videoData,
      }
    );

    if (status === 201 && success === true) {
      if (historyId === null) {
        dispatchgeneral({ type: "SAVE_HISTORY_ID", payload: historyid });
        localStorage.setItem("historyid", JSON.stringify(historyid));
      }

      dispatchgeneral({ type: "ADD_TO_HISTORY", payload: videos });
    }
  } catch (error) {
    console.log(error.stack);
    console.log(error.message);
  }
};
