import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";

export const addToWatchlist = async (
  watchlistId,
  videoData,
  dispatchwatchlist
) => {
  try {
    const {
      status,
      data: {
        success,
        watchlistData: { _id: watchid, videos },
      },
    } = await axios.post(
      watchlistId === null
        ? `https://videoLibraryServer.joyan11.repl.co/watchlist`
        : `https://videoLibraryServer.joyan11.repl.co/watchlist/${watchlistId}`,
      {
        videos: videoData,
      }
    );

    if (status === 201 && success === true) {
      if (watchlistId === null) {
        dispatchwatchlist({ type: "SAVE_WATCHLIST_ID", payload: watchid });
        localStorage.setItem("watchid", JSON.stringify(watchid));
      }

      dispatchwatchlist({ type: "ADD_TO_WATCHLIST", payload: videos });
      toastMessages("Video Added to Watch List");
    }
  } catch (error) {
    console.log(error.stack);
    console.log(error.message);
  }
};
