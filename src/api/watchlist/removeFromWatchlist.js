import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";

export const removeFromWatchlist = async (
  watchlistId,
  videoId,
  dispatchwatchlist
) => {
  try {
    const {
      status,
      data: {
        success,
        watchlistData: { _id: watchid, videos },
      },
    } = await axios.delete(
      `https://videoLibraryServer.joyan11.repl.co/watchlist/${watchlistId}/${videoId}`
    );
    if (status === 200 && success === true) {
      dispatchwatchlist({ type: "REMOVE_FROM_WATCHLIST", payload: videoId });
      toastMessages("Video Removed from Watch List");
    }
  } catch (error) {
    console.log(error.stack);
    console.log(error.message);
  }
};
