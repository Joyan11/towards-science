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
    case "CREATE_PLAY_LIST":
      return {
        ...state,
        playList: [
          ...state.playList,
          { id: `${uuid()}`, name: action.payload, list: [] },
        ],
      };
    case "SAVE_TO_PLAYLIST":
      const newObj = state.playList.map((item) => {
        if (item.id === action.playlistId) {
          return {
            ...item,
            list: [...item.list, action.videoData],
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        playList: newObj,
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playList: state.playList.map((item) => {
          if (item.id === action.playlistId) {
            return {
              ...item,
              list: item.list.filter((item) => item.id !== action.videoData),
            };
          } else {
            return item;
          }
        }),
      };
    case "DELETE_PLAYLIST":
      return {
        ...state,
        playList: state.playList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
