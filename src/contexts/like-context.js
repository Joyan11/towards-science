import { createContext, useContext, useReducer } from "react";
import { likeReducer } from "../reducer/like-reducer";
const likeContext = createContext();

const initialState = {
  likeList: [],
  likeId: null,
};

export const LikeProvider = ({ children }) => {
  const [state, dispatchlike] = useReducer(likeReducer, initialState);
  return (
    <likeContext.Provider value={{ ...state, dispatchlike }}>
      {children}
    </likeContext.Provider>
  );
};

export const useLike = () => {
  return useContext(likeContext);
};
