/** @format */

import { createContext, useReducer, useContext } from "react";
import { watchListReducer } from "../reducer/watchlist-reducer";
const watchListContext = createContext();

const initialState = {
  watchList: [],
};

export const WatchListProvider = ({ children }) => {
  const [state, dispatchwatchlist] = useReducer(watchListReducer, initialState);
  return (
    <watchListContext.Provider value={{ ...state, dispatchwatchlist }}>
      {children}
    </watchListContext.Provider>
  );
};

export const useWatchList = () => {
  return useContext(watchListContext);
};
