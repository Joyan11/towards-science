import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useGeneralContext } from "../../contexts/general-context";
import { usePlaylist } from "../../contexts/playlist-context";

export const usePlaylistData = () => {
  const { playList, dispatchplaylist } = usePlaylist();
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
        `https://videoLibraryServer.joyan11.repl.co/playlists`,
        { headers: { authorization: token } }
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
    if (playList.length === 0 && token) {
      getData();
    }
  }, [token]);
};
