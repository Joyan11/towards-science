import axios from "axios";
import { useEffect } from "react";
import { useGeneralContext } from "../../contexts/general-context";

export const useHistoryData = () => {
  const { history, historyId, dispatchgeneral } = useGeneralContext();

  const getData = async () => {
    dispatchgeneral({ type: "SET_LOADER" });
    try {
      const {
        status,
        data: {
          success,
          historyData: { videos },
        },
      } = await axios.get(
        `https://videoLibraryServer.joyan11.repl.co/history/${historyId}`
      );
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
    if (history.length === 0 && historyId !== null) {
      getData();
    }
  }, [historyId]);
};
