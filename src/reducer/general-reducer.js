export const generalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_HISTORY":
      console.log(action.payload);
      if (
        state.history.some((item) => item.id === action.payload.id) === false
      ) {
        return {
          ...state,
          history: [...state.history, action.payload],
        };
      } else {
      }

    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        history: state.history.filter((item) => item.id !== action.payload),
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
  }
};
