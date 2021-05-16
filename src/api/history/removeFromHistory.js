import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";

export const removeFromHistory = async (
  historyId,
  videoId,
  dispatchgeneral
) => {
  try {
    const {
      status,
      data: {
        success,
        historyData: { videos },
      },
    } = await axios.delete(
      `https://videoLibraryServer.joyan11.repl.co/history/${historyId}/${videoId}`
    );
    if (status === 200 && success === true) {
      dispatchgeneral({ type: "REMOVE_FROM_HISTORY", payload: videoId });
      toastMessages("Video Removed from History");
    }
  } catch (error) {
    console.log(error.stack);
    console.log(error.message);
  }
};
