import { createContext } from "preact";

const CounterContext = createContext({value: 0, setValue: (value:number) => {}});
export default CounterContext;