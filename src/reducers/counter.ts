export interface CounterState {
  count: number;
}

interface CounterAction {
  type: "INCREMENT" | "DECREMENT"
}

const initialState: CounterState = {
  count: 0
};

const counter = (state: CounterState = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default counter;
