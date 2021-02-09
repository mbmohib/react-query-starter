import React from "react";
import { useUsers } from "../services";
import { Link } from "react-router-dom";

export default function Users() {
  const { data, isLoading, isFetching } = useUsers();

  return (
    <>
      {isLoading && "Loading..."}
      {data?.data.map((user) => (
        <div key={user.id}>
          <p>{user.first_name}</p>

          <Link to={`users/${user.id}`}>Details</Link>
        </div>
      ))}
      {isFetching && "Fetching in the background..."}
    </>
  );
}
