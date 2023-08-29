"use client";

import { createContext, useState } from "react";

export const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
  const [hero, setHero] = useState();

  const chooseHero = (value) => {
    setHero(value);
  };

  return (
    <HeroContext.Provider value={{ chooseHero , hero }}>
      <div >{children}</div>
    </HeroContext.Provider>
  );
};