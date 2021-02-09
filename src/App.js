import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
import Routes from "../src/routes";
import AxiosProvider from "./services/useAxios";
import AuthProvider from "./services/useAuth";
// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <AxiosProvider>
        <QueryClientProvider client={queryClient}>
          <Routes />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AxiosProvider>
    </AuthProvider>
  );
}

export default App;
