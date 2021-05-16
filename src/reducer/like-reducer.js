export const likeReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_LIKES_ID":
      return {
        ...state,
        likeId: action.payload,
      };
    case "ADD_TO_LIKES":
      return {
        ...state,
        likeList: action.payload,
      };
    case "REMOVE_FROM_LIKES":
      return {
        ...state,
        likeList: state.likeList.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};
