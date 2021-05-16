import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";

export const removeFromLikes = async (likeId, videoId, dispatchlikes) => {
  try {
    const {
      status,
      data: {
        success,
        likeData: { videos },
      },
    } = await axios.delete(
      `https://videoLibraryServer.joyan11.repl.co/likes/${likeId}/${videoId}`
    );
    if (status === 200 && success === true) {
      dispatchlikes({ type: "REMOVE_FROM_LIKES", payload: videoId });
      toastMessages("Video Removed from Likes");
    }
  } catch (error) {
    console.log(error.stack);
    console.log(error.message);
  }
};
