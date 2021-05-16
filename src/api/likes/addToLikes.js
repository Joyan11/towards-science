import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";

export const addToLikes = async (likeId, videoData, dispatchlikes) => {
  try {
    const {
      status,
      data: {
        success,
        likeData: { _id: likeid, videos },
      },
    } = await axios.post(
      likeId === null
        ? `https://videoLibraryServer.joyan11.repl.co/likes`
        : `https://videoLibraryServer.joyan11.repl.co/likes/${likeId}`,
      {
        videos: videoData,
      }
    );

    if (status === 201 && success === true) {
      if (likeId === null) {
        dispatchlikes({ type: "SAVE_LIKES_ID", payload: likeid });
        localStorage.setItem("likeid", JSON.stringify(likeid));
      }
      dispatchlikes({ type: "ADD_TO_LIKES", payload: videos });
      toastMessages("Video Added to Likes");
    }
  } catch (error) {
    console.log(error.stack);
    console.log(error.message);
  }
};
