import React from "react";
import { Box } from "@material-ui/core";
import { useCount } from "./Context";
import { useAuth } from "../services";

const CounterDisplay = () => {
  const { count } = useCount();
  const auth = useAuth();
  console.log("auth :>> ", auth);

  return (
    <Box>
      <Box>{count}</Box>
      <Box>Counter</Box>
    </Box>
  );
};

export default CounterDisplay;
