import axios from "axios";
import { useState, useEffect } from "react";
import { useGeneralContext } from "../../contexts/general-context";
import { usePlaylist } from "../../contexts/playlist-context";

export const useSinglelistData = (playlistId, listId) => {
  const { playList } = usePlaylist();
  const [playlist, setPlaylist] = useState();
  const { dispatchgeneral } = useGeneralContext();

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
        `https://videoLibraryServer.joyan11.repl.co/playlists/${playlistId}/${listId}`
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
    if (playList.length === 0 && playlistId !== null) {
      getData();
    }
  }, []);
  return playlist;
};
