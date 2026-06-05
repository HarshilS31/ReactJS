import { createContext, useState } from "react";

export const Context1 = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ name: "Tony" });

  function updateUser(newName) {
    setUser({ name: newName });
  }

  return (
    // FIX: Pass updateUser inside the value object so other components can access it
    <Context1.Provider value={{ user, updateUser }}>
      {children}
    </Context1.Provider>
  );
};

export default UserContext;