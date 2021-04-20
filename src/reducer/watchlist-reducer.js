export const watchListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter((item) => item.id !== action.payload),
      };
  }
};
