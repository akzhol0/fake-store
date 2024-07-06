import React, { createContext } from "react";

type ContextProps = {
};

export const contextData = createContext({} as ContextProps);

type ContextOverAllProps = {
  children: React.ReactNode;
};

export function ContextOverAll({ children }: ContextOverAllProps) {

  return (
    <contextData.Provider value={{
    }}>
      {children}
    </contextData.Provider>
  );
}