import { useMutation } from "react-query";
import useAxios from "./useAxios";

export default function useLogin() {
  const axios = useAxios();

  return useMutation(data => axios.post("/login", data));
}
