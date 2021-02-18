import React from "react";
import { Header } from "./";

export default function Layout({ children }) {
  return (
    <div style={{ padding: 24 }}>
      <Header />
      {children}
    </div>
  );
}
