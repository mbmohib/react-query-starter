import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
import { AuthProvider } from "./hooks/useAuth";
import AppRoutes from "./routes";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppRoutes />
          <ReactQueryDevtools />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
