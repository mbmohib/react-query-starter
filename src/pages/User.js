import React from "react";
import { useUser } from "../services";
import { useParams } from "react-router-dom";

export default function User() {
  const params = useParams();
  const { data: { data } = {}, isLoading } = useUser(params.id);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <p>{data?.first_name}</p>
      <p>{data?.last_name}</p>
      <p>{data?.email}</p>
    </>
  );
}
