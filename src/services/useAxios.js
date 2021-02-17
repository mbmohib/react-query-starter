import { useMemo } from "react";
import Axios from "axios";
import { useAuth } from "./useAuth";
import { apiEndpoint } from "../config";

export default function useAxios() {
  const auth = useAuth();

  const axios = useMemo(() => {
    const axios = Axios.create({
      baseURL: apiEndpoint,
      headers: {
        "Content-Type": "application/json",
      },
    });

    axios.interceptors.request.use(config => {
      if (auth.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }

      return config;
    });

    return axios;

    // eslint-disable-next-line
  }, [auth.token]);

  return axios;
}
