import { createContext, useContext, useMemo, useEffect, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { apiEndpoint } from "../config";
import { useLocalStorage } from "./";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [authData, setAuthData] = useState({});
  const [auth, setAuth, removeAuth] = useLocalStorage("auth");
  const { user, token } = authData || {};

  useEffect(() => {
    if (auth) {
      setAuthData(auth);
    }
  }, [auth]);

  const { mutate, isLoading } = useMutation(
    data => axios.post(`${apiEndpoint}/login`, data),
    {
      onSuccess: data => {
        const info = {
          user: { name: "John Doe", email: "john_doe@john.com" },
          token: data?.data?.token ?? "",
        };

        setAuth(info);
        setAuthData(info);
      },
    }
  );

  const login = data => {
    mutate(data);
  };

  const logout = () => {
    removeAuth();
    setAuthData({});
  };

  const contextValue = useMemo(
    () => ({
      isAuth: !!token,
      token: token,
      user: user,
      login: login,
      logout: logout,
      isLoading: isLoading,
    }),

    // eslint-disable-next-line
    [user, token, isLoading]
  );

  return <AuthContext.Provider value={contextValue} {...props} />;
}

export default function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}
