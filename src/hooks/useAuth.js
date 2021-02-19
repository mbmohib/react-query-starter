import { createContext, useContext, useMemo, useEffect, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { apiEndpoint } from "../config";
import { AuthService } from "../utils";

export const AuthContext = createContext();
const Auth = new AuthService();

export function AuthProvider({ initialState = {}, ...props }) {
  const auth = Auth.getAuth() || {};
  const [authData, setAuthData] = useState();
  const { user, token } = authData || initialState || {};

  useEffect(() => {
    if (auth.token) {
      setAuthData(auth);
    }

    // eslint-disable-next-line
  }, [auth.token]);

  const { mutate, isLoading } = useMutation(
    data => axios.post(`${apiEndpoint}/login`, data),
    {
      onSuccess: data => {
        const info = {
          user: { name: "John Doe", email: "john_doe@john.com" },
          token: data?.data?.token ?? "",
        };

        Auth.setAuth(info);
        setAuthData(info);
      },
    }
  );

  const login = data => {
    mutate(data);
  };

  const logout = () => {
    Auth.removeAuth();
    setAuthData({});
  };

  const contextValue = useMemo(
    () => ({
      isAuth: !!token,
      token: token,
      user: user,
      isLoading: isLoading,
      login: login,
      logout: logout,
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
