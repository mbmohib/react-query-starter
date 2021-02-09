import { createContext, useState, useContext, useMemo } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState("token");

  const login = () => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
  };

  const contextValue = useMemo(
    () => ({
      isAuth: !!token,
      token: token,
      login: login,
      logout: logout,
    }),

    // eslint-disable-next-line
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
