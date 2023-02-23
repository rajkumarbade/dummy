import React from "react";
import {
  incrementFn,
  decrementFn,
  incrementByValueFn,
  resetHandler
} from "../store/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    count: state.count.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementFn()),
    decrement: () => dispatch(decrementFn()),
    incrementByValue: () => dispatch(incrementByValueFn()),
    resetCounter: () => dispatch(resetHandler())
  };
};

const Counter = (props) => {
  return (
    <div>
      <p>COUNTER</p>
      <p>{props.count}</p>
      <button onClick={props.increment}>INCREASE</button>
      <button onClick={props.decrement}>DECREASE</button>
      <button onClick={props.incrementByValue}>INCREASE_BY_VALUE</button>
      <button onClick={props.resetCounter}>RESET</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
