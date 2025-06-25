import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const toggleAuth = () => {
    const newStatus = !loggedIn;
    localStorage.setItem("isLoggedIn", newStatus.toString());
    setLoggedIn(newStatus);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
