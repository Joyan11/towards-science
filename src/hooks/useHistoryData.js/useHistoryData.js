/** @format */

import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useGeneralContext } from "../../contexts/general-context";

export const useHistoryData = () => {
  const { history, dispatchgeneral } = useGeneralContext();
  const { token } = useAuth();

  const getData = async () => {
    dispatchgeneral({ type: "SET_LOADER" });
    try {
      const {
        status,
        data: {
          success,
          historyData: { videos },
        },
      } = await axios.get(`https://videoLibraryServer.joyan11.repl.co/history`);
      if (status === 200 && success === true) {
        dispatchgeneral({
          type: "ADD_TO_HISTORY",
          payload: videos,
        });
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.stack);
    } finally {
      dispatchgeneral({ type: "SET_LOADER" });
    }
  };

  useEffect(() => {
    if (token && history.length === 0) {
      getData();
    }
  }, [token]);
};
