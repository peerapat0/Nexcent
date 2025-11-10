'use client'
import React, { createContext, useContext, useState } from 'react'


const AppContext = createContext()


export function AppProvider({ children }) {
const [menuOpen, setMenuOpen] = useState(false)
return (
<AppContext.Provider value={{ menuOpen, setMenuOpen }}>
{children}
</AppContext.Provider>
)
}


export function useAppContext() {
return useContext(AppContext)
}