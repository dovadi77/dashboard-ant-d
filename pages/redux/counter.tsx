import React from "react";
import { connect } from "react-redux";
import Head from "../../components/Head";
import {
  decrementCounter,
  incrementCounter,
} from "../../redux/actions/counterAction";

function Counter(props: any) {
  return (
    <div>
      <Head />
      <button onClick={props.incrementCounter}>Increment</button>
      <button onClick={props.decrementCounter}>Decrement</button>
      <h1>{props.counter}</h1>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  counter: state.counter.value,
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
