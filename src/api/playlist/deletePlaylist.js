import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";
export const deletePlaylist = async (playlistId, listId, dispatchplaylist) => {
  try {
    const {
      status,
      data: {
        success,
        playlistData: { playlist },
      },
    } = await axios.delete(
      `https://videoLibraryServer.joyan11.repl.co/playlists/${playlistId}/${listId}`
    );
    if (status === 200 && success === true) {
      dispatchplaylist({ type: "DELETE_PLAYLIST", payload: playlist });
      toastMessages("Playlist Deleated");
    }
  } catch (error) {
    console.log(error.stack);
    console.log(error.message);
  }
};
