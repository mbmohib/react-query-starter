import React from "react";
import { Header } from "./";
import { useAuth } from "../hooks";

export default function Layout({ children }) {
  const { isAuth } = useAuth();

  return (
    <div style={{ padding: 24 }}>
      {isAuth && <Header />}
      {children}
    </div>
  );
}
