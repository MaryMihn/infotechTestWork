"use client";

import { createContext, useState } from "react";

export const EnemyContext  = createContext();

export const EnemyProvider = ({ children }) => {
  const [enemy, setEnemy] = useState();

  const chooseEnemy = (value) => {
    setEnemy(value);
  };

  return (
    <EnemyContext.Provider value={{ chooseEnemy, enemy }}>
      <div >{children}</div>
    </EnemyContext.Provider>
  );
};