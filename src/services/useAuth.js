import { createContext, useState, useContext, useMemo } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { apiEndpoint } from "../config";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const [token, setToken] = useState();

  const { mutate, isLoading } = useMutation(
    data => axios.post(`${apiEndpoint}/login`, data),
    {
      onSuccess: data => {
        setToken(data.data);
      },
    }
  );

  const login = data => {
    mutate(data);
    setToken("data.data");
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
      isLoading: isLoading,
    }),

    // eslint-disable-next-line
    [token, isLoading]
  );

  return <AuthContext.Provider value={contextValue} {...props} />;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}
