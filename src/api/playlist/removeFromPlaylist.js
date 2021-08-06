/** @format */

import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";
export const removeFromPlaylist = async (
  listId,
  videoId,
  dispatchplaylist,
  token
) => {
  toastMessages("Please wait...");
  try {
    const {
      status,
      data: {
        success,
        playlistData: { playlist },
      },
    } = await axios.delete(
      `https://videoLibraryServer.joyan11.repl.co/playlists/${listId}/${videoId}`
    );
    if (status === 201 && success === true) {
      dispatchplaylist({
        type: "REMOVE_FROM_PLAYLIST",
        payload: playlist,
      });
      toastMessages("Video Removed from Playlist");
    }
  } catch (error) {
    console.log(error.message);
    console.log(error.stack);
  }
};
