import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
import { AuthProvider } from "./hooks/useAuth";
import AppRoutes from "./routes";

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRoutes />
        <ReactQueryDevtools />
      </AuthProvider>
    </QueryClientProvider>
  );
}
