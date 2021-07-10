/** @format */

import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useGeneralContext } from "../../contexts/general-context";
import { usePlaylist } from "../../contexts/playlist-context";

export const useSinglelistData = (listId) => {
  const { playList } = usePlaylist();
  const [playlist, setPlaylist] = useState();
  const { dispatchgeneral } = useGeneralContext();
  const { token } = useAuth();

  const getData = async () => {
    dispatchgeneral({ type: "SET_LOADER" });
    try {
      const {
        status,
        data: {
          success,
          playlistData: { playlist },
        },
      } = await axios.get(
        `https://videoLibraryServer.joyan11.repl.co/playlists/${listId}`,
        { headers: { authorization: token } }
      );
      if (status === 200 && success === true) {
        setPlaylist(playlist);
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.stack);
    } finally {
      dispatchgeneral({ type: "SET_LOADER" });
    }
  };

  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);
  return playlist;
};
