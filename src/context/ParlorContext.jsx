//Manages your in-app data for the Parlor Room — e.g. list of muses, adding/removing entries, caching API calls

import { createContext, useState, useContext } from 'react'

const ParlorContext = createContext()
export const useParlor = () => useContext(ParlorContext)

export function ParlorProvider({ children }) {
  const [muses, setMuses] = useState([])

  const addMuse = muse => setMuses(prev => [...prev, muse])

  return (
    <ParlorContext.Provider value={{ muses, addMuse }}>
      {children}
    </ParlorContext.Provider>
  )
}
