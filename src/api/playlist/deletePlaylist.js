import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";
export const deletePlaylist = async (listId, dispatchplaylist, token) => {
  try {
    const {
      status,
      data: {
        success,
        playlistData: { playlist },
      },
    } = await axios.delete(
      `https://videoLibraryServer.joyan11.repl.co/playlists/${listId}`,
      { headers: { authorization: token } }
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
