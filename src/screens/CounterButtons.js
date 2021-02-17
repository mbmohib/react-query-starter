import React from "react";
import { Button } from "@material-ui/core";
import { useCount } from "./Context";
import { useAuth } from "../hooks";

const CounterButtons = () => {
  const { count, changeCount } = useCount();
  const auth = useAuth();

  console.log("auth | buttons :>> ", auth);

  const increment = () => {
    auth.login({
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    });
    changeCount(count + 1);
  };

  const decrement = () => {
    changeCount(count - 1);
  };

  return (
    <div>
      <>
        <Button color="green" onClick={increment}>
          Add
        </Button>
        <Button color="red" onClick={decrement}>
          Minus
        </Button>
      </>
    </div>
  );
};

export default CounterButtons;
