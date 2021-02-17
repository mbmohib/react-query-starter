import React from "react";
import { Container, Box } from "@material-ui/core";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";
import CounterDisplayAgain from "./CounterDisplayAgain";
import { useAuth } from "../services/useAuth";
import CounterProvider from "./Context";

const CounterView = () => {
  const auth = useAuth();
  console.log("auth | CounterView :>> ", auth);

  return (
    <CounterProvider>
      <Container>
        <h3>Counter</h3>
        <Box textAlign="center">
          <CounterDisplay />
          <CounterButtons />
          <CounterDisplayAgain />
        </Box>
      </Container>
    </CounterProvider>
  );
};

export default CounterView;
