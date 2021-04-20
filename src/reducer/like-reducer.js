export const likeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIKED":
      return {
        ...state,
        likeList: [...state.likeList, action.payload],
      };
    case "REMOVE_FROM_LIKED":
      return {
        ...state,
        likeList: state.likeList.filter((item) => item.id !== action.payload),
      };
  }
};
