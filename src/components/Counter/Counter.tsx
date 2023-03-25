import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { increment, decrement } from '../../actions/counter';

import "./Counter.scss";

interface Props {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const Counter: React.FC<Props> = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  count: state.counter.count
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
