/** @format */

import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "../reducer/playlist-reducer";
const playlistContext = createContext();

const initialState = {
  playList: [],
  showPlaylistModal: {
    status: false,
    videoData: "",
  },
  inputPlaylistBox: false,
};

export const PlaylistProvider = ({ children }) => {
  const [state, dispatchplaylist] = useReducer(playlistReducer, initialState);
  return (
    <playlistContext.Provider value={{ ...state, dispatchplaylist }}>
      {children}
    </playlistContext.Provider>
  );
};

export const usePlaylist = () => {
  return useContext(playlistContext);
};
