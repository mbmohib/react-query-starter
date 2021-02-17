import { useQuery } from "react-query";
import useAxios from "./useAxios";

export default function useUser(userId) {
  const axios = useAxios();

  return useQuery(["user", userId], async () => {
    const { data } = await axios.get(`users/${userId}`);

    return data;
  });
}
