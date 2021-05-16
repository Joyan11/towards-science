import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";
export const createPlaylist = async (playlistId, dispatchplaylist, text) => {
  try {
    const {
      status,
      data: {
        success,
        playlistData: { _id: playlistid, playlist },
      },
    } = await axios.post(
      playlistId === null
        ? `https://videoLibraryServer.joyan11.repl.co/playlists`
        : `https://videoLibraryServer.joyan11.repl.co/playlists/${playlistId}`,
      {
        playlist: {
          name: text,
          list: [],
        },
      }
    );

    if (status === 201 && success === true) {
      if (playlistId === null) {
        dispatchplaylist({ type: "SAVE_PLAYLIST_ID", payload: playlistid });
        localStorage.setItem("playlistid", JSON.stringify(playlistid));
      }
      dispatchplaylist({ type: "CREATE_PLAY_LIST", payload: playlist });
    }
  } catch (error) {
    console.log(error.message);
    console.log(error.stack);
  }
};
