import { createContext, useReducer, useContext } from "react";
import { data } from "../data/data";
import { generalReducer } from "../reducer/general-reducer";

const generalContext = createContext();

const initialState = {
  videos: data,
  history: [],
  videoFilter: "all",
  hamMenu: true,
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
