import { h, Fragment } from "preact";

const Topic = (props: { topic: string }) => {
  return (
    <Fragment>
      <h1>Topic: {props.topic}</h1>
    </Fragment>
  );
};

export default Topic;
