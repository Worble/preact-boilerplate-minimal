import { h, ComponentChildren } from "preact";
import { useState } from "preact/hooks";
import CounterContext from "./CounterContext";

const CounterProvider = (props: { children: ComponentChildren }) => {
  const [value, setValue] = useState(0);

  return (
    <CounterContext.Provider value={{ value, setValue }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
