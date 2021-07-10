/** @format */

import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";

export const addToWatchlist = async (videoData, dispatchwatchlist, token) => {
  try {
    const {
      status,
      data: {
        success,
        watchlistData: { videos },
      },
    } = await axios.post(
      `https://videoLibraryServer.joyan11.repl.co/watchlist`,
      {
        videos: videoData,
      }
    );

    if (status === 201 && success === true) {
      dispatchwatchlist({ type: "ADD_TO_WATCHLIST", payload: videos });
      toastMessages("Video Added to Watch List");
    }
  } catch (error) {
    console.log(error.stack);
    console.log(error.message);
  }
};
