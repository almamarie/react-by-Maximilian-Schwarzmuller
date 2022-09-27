import React, { useEffect, useState } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    } else if (storedUserLoggedInInformation === "0") {
      setIsLoggedIn(false);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.setItem("isLoggesIn", "0");
    setIsLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggesIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogIn: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
