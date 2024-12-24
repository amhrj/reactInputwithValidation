import React, { createContext } from 'react';

const userName = createContext();

const Context = ({children}) => {
    
  const myName = 'Amrit';

  return (
    <>
      <userName.Provider value={myName}>
        {children}
      </userName.Provider>
    </>
  );
}

export {userName, Context};