//Manages your in-app data for the Parlor Room — e.g. list of muses, adding/removing entries, caching API calls

import { createContext, useContext, useState } from "react";

const ParlorContext = createContext();

export function ParlorProvider({ children }) {
  const [parlor, setParlor] = useState("activities");
  const value = { parlor, setParlor };
  return <ParlorContext.Provider value={value}>{children}</ParlorContext.Provider>;
}

export function useParlor() {
  const context = useContext(ParlorContext);
  if (!context) throw Error("useParlor must be used within ParlorProvider");
  return context;
}