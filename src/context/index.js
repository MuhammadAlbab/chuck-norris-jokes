import { createContext, useContext, useState } from "react";

const JokesContext = createContext();
export const JokesProvider = ({ children }) => {
  const [value, setValue] = useState([]);
  return (
    <JokesContext.Provider value={{ value, setValue }}>
      {children}
    </JokesContext.Provider>
  );
};

export const useJokes = () => {
  return useContext(JokesContext);
};
