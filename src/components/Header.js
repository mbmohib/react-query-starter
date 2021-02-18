import React from "react";
import { Button } from "./";
import { useAuth } from "../hooks";

export default function Header() {
  const { user = {}, logout } = useAuth();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>{user.name}</div>
      <div>
        <Button variant="contained" color="primary" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
