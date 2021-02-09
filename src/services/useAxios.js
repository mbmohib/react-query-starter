import React, { useMemo, createContext, useContext } from "react";
import Axios from "axios";
import { useAuth } from "./useAuth";
import { apiEndpoint } from "../config";

export const AxiosContext = createContext();

export default function AxiosProvider({ children }) {
  const auth = useAuth();
  const axios = useMemo(() => {
    const axios = Axios.create({
      baseURL: apiEndpoint,
      headers: {
        "Content-Type": "application/json",
      },
    });

    axios.interceptors.request.use((config) => {
      if (auth.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }

      return config;
    });

    return axios;

    // eslint-disable-next-line
  }, []);

  return (
    <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
  );
}

export function useAxios() {
  return useContext(AxiosContext);
}
