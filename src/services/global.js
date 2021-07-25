import React from 'react';

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [state, setState] = React.useState(null);
  const value = { globalState: state, setGlobal: setState };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobal = () => {
  const context = React.useContext(GlobalContext);
  if (!context) {
    throw Error('Please use in GlobalProvider');
  }

  return context;
};

export { GlobalProvider, useGlobal };
