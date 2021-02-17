import React from "react";

const CounterContext = React.createContext();

export default function CounterProvider(props) {
  const [count, setCount] = React.useState(0);

  const changeCount = value => {
    setCount(value);
  };

  const value = React.useMemo(
    () => ({
      changeCount: changeCount,
      count: count,
      auth: count > 0,
    }),
    [count]
  );

  return <CounterContext.Provider value={value} {...props} />;
}

export const useCount = () => {
  return React.useContext(CounterContext);
};
