import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { INCREMENT, DECREMENT } from '../Reducers/actonTypes'

//Receive props from Provider (Redux)
const Counter = (props) => {
  const increment = () => {
    props.dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    props.dispatch({ type: DECREMENT });
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="btnBox">
        <Button
          className="btnStyle"
          variant="success"
          size="lg"
          onClick={() => decrement()}
        >
          -
        </Button>
        <span className="count">{props.count}</span>
        <Button
          className="btnStyle"
          variant="success"
          size="lg"
          onClick={() => increment()}
        >
          +
        </Button>
      </div>
    </div>
  );
};

// Connect Counter with Redux and send state as props to Counter function
const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.count,
  };
};

// Connect Counter with Redux and send state as props to Counter function
export default connect(mapStateToProps)(Counter);
