import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import AppRoutes from "./routes";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";
import { useLocalStorage } from "./hooks";
import { QueryClientProvider, QueryClient } from "react-query";
import { AuthProvider } from "./hooks/useAuth";

// // Create a client
const queryClient = new QueryClient();

export default function App() {
  const [auth] = useLocalStorage("auth");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {auth && <AppRoutes isAuth={auth?.token} />}
          <ReactQueryDevtools />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
