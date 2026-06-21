import React from 'react'
import UserContext, {type UserData } from "./UserContext"

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => { 
  // Let TypeScript know the state can be UserData or null
  const [user, setUser] = React.useState<UserData | null>(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;