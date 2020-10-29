import Router, { Link, Route } from "preact-router";
import { h } from "preact";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Topic from "./routes/Topic";
import CounterProvider from "./providers/CounterProvider";

const App = () => {
  return (
    <CounterProvider>
      <nav>
        <Link href="/">Home</Link> &nbsp;&nbsp;
        <Link href="/test">Topic</Link> &nbsp;&nbsp;
        <Link href="/this/does/not/exist">404</Link> &nbsp;&nbsp;
      </nav>
      <div>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/:topic" component={Topic} />
          <NotFound default />
        </Router>
      </div>
    </CounterProvider>
  );
};

export default App;
