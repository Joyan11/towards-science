/** @format */

import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useGeneralContext } from "../../contexts/general-context";
import { useLike } from "../../contexts/like-context";

export const useLikeData = () => {
  const { likeList, dispatchlike } = useLike();
  const { dispatchgeneral } = useGeneralContext();
  const { token } = useAuth();
  const getData = async () => {
    dispatchgeneral({ type: "SET_LOADER" });
    try {
      const {
        status,
        data: {
          success,
          likeData: { videos },
        },
      } = await axios.get(`https://videoLibraryServer.joyan11.repl.co/likes`);
      if (status === 200 && success === true) {
        dispatchlike({
          type: "ADD_TO_LIKES",
          payload: videos,
        });
      }
    } catch (error) {
      if (error?.response.status) {
        console.log("like list not created yet");
      }
    } finally {
      dispatchgeneral({ type: "SET_LOADER" });
    }
  };

  useEffect(() => {
    if (token && likeList.length === 0) {
      getData();
    }
  }, [token]);
};
