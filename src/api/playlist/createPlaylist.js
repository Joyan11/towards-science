import axios from "axios";
export const createPlaylist = async (dispatchplaylist, text, token) => {
  try {
    const {
      status,
      data: {
        success,
        playlistData: { _id: playlistid, playlist },
      },
    } = await axios.post(
      `https://videoLibraryServer.joyan11.repl.co/playlists`,
      {
        playlist: {
          name: text,
          list: [],
        },
      },
      { headers: { authorization: token } }
    );

    if (status === 201 && success === true) {
      dispatchplaylist({ type: "CREATE_PLAY_LIST", payload: playlist });
    }
  } catch (error) {
    console.log(error.message);
    console.log(error.stack);
  }
};
