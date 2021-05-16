import uuid from "react-uuid";
export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_PLAYLIST_MODAL":
      return {
        ...state,
        showPlaylistModal: {
          ...state.showPlaylistModal,
          status: state.showPlaylistModal.status === false ? true : false,
          videoData: action.payload === undefined ? "" : action.payload,
        },
      };
    case "DISPLAY_INPUT_BOX":
      return {
        ...state,
        inputPlaylistBox: state.inputPlaylistBox === false ? true : false,
      };
    case "SAVE_PLAYLIST_ID":
      return {
        ...state,
        playlistId: action.payload,
      };
    case "CREATE_PLAY_LIST":
      return {
        ...state,
        playList: action.payload,
      };
    case "SAVE_TO_PLAYLIST":
      return {
        ...state,
        playList: action.payload,
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playList: action.payload,
      };
    case "DELETE_PLAYLIST":
      return {
        ...state,
        playList: action.payload,
      };
    default:
      return state;
  }
};
