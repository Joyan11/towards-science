import { createContext, useReducer, useContext } from "react";
import { generalReducer } from "../reducer/general-reducer";

const generalContext = createContext();

const initialState = {
  videos: [],
  history: [],
  historyId: null,
  videoFilter: "all",
  hamMenu: true,
  loader: false,
  views: 0,
};

export const GeneralContextProvider = ({ children }) => {
  const [state, dispatchgeneral] = useReducer(generalReducer, initialState);
  return (
    <generalContext.Provider value={{ ...state, dispatchgeneral }}>
      {children}
    </generalContext.Provider>
  );
};

export const useGeneralContext = () => {
  return useContext(generalContext);
};
