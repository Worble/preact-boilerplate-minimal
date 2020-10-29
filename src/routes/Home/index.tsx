import { h, Fragment } from "preact";
import { useCallback, useContext, useEffect } from "preact/hooks";
import CounterContext from "../../providers/CounterProvider/CounterContext";

const Home = () => {
  const { value, setValue } = useContext(CounterContext);
  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  useEffect(() => {
    performRequest();
  }, []);

  return (
    <Fragment>
      <h1>Home</h1>
      <div>Counter: {value}</div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    </Fragment>
  );
};

async function performRequest() {
  try {
    var result = await fetch("https://localhost:5001/api/Forum");
    var json = await result.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  }
}

export default Home;
