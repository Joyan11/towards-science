/** @format */

import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useGeneralContext } from "../../contexts/general-context";
import { useWatchList } from "../../contexts/watchlist-context";

export const useWatchlistData = () => {
  const { token } = useAuth();
  const { watchList, dispatchwatchlist } = useWatchList();
  const { dispatchgeneral } = useGeneralContext();

  const getData = async () => {
    dispatchgeneral({ type: "SET_LOADER" });
    try {
      const {
        status,
        data: {
          success,
          watchlistData: { videos },
        },
      } = await axios.get(
        `https://videoLibraryServer.joyan11.repl.co/watchlist`
      );
      if (status === 200 && success === true) {
        dispatchwatchlist({
          type: "ADD_TO_WATCHLIST",
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
    if (watchList.length === 0 && token) {
      getData();
    }
  }, [token]);
};
