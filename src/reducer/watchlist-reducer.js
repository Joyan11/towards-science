export const watchListReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_WATCHLIST_ID":
      return {
        ...state,
        watchlistId: action.payload,
      };
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchList: action.payload,
      };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (item) => item._id !== action.payload
        ),
      };
    case "RESET":
      return {
        ...state,
        watchList: [],
      };
    default:
      return {
        ...state,
      };
  }
};
