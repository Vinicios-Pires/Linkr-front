import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUserToken(token);
  }, []);

  const logUserIn = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    setUserToken(token);
  };

  const logUserOut = () => {
    localStorage.removeItem("token");
    setUserToken({});
    window.location.reload();
  };

  return (
    <UserContext.Provider value={{ userToken, logUserIn, logUserOut }}>
      {children}
    </UserContext.Provider>
  );
}
