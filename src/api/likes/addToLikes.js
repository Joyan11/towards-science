import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";

export const addToLikes = async (videoData, dispatchlikes, token) => {
  try {
    const {
      status,
      data: {
        success,
        likeData: { _id: likeid, videos },
      },
    } = await axios.post(
      `https://videoLibraryServer.joyan11.repl.co/likes`,
      {
        videos: videoData,
      },
      { headers: { authorization: token } }
    );

    if (status === 201 && success === true) {
      dispatchlikes({ type: "ADD_TO_LIKES", payload: videos });
      toastMessages("Video Added to Likes");
    }
  } catch (error) {
    console.log(error.stack);
    console.log(error.message);
  }
};
