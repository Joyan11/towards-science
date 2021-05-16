import axios from "axios";
import { useEffect } from "react";
import { useGeneralContext } from "../../contexts/general-context";
import { usePlaylist } from "../../contexts/playlist-context";

export const usePlaylistData = () => {
  const { playList, playlistId, dispatchplaylist } = usePlaylist();
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
        `https://videoLibraryServer.joyan11.repl.co/playlists/${playlistId}`
      );

      if (status === 200 && success === true) {
        dispatchplaylist({ type: "SAVE_TO_PLAYLIST", payload: playlist });
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
  }, [playlistId]);
};
