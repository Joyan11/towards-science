export const generalReducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_DATA":
      return {
        ...state,
        videos: action.payload,
      };
    case "SAVE_HISTORY_ID":
      return {
        ...state,
        historyId: action.payload,
      };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: action.payload,
      };
    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        history: state.history.filter((item) => item._id !== action.payload),
      };
    case "VIDEO_FILTER":
      return {
        ...state,
        videoFilter: action.payload,
      };
    case "MENU_TOGGLE":
      return {
        ...state,
        hamMenu: !state.hamMenu,
      };
    case "SET_LOADER":
      return {
        ...state,
        loader: !state.loader,
      };
    case "RESET":
      return {
        ...state,
        history: [],
      };
    default:
      return {
        ...state,
      };
  }
};
