import React from 'react';
export interface UserData {
  name: string;
  email: string;
  password?: string;
}
export interface UserContextType {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>> | null;
}
const UserContext = React.createContext<UserContextType>({
  user: null,
  setUser: null, 
});

export default UserContext;