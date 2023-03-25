import { combineReducers, Reducer } from 'redux';
import counter, { CounterState } from './counter';

export interface RootState {
  counter: CounterState;
}

const rootReducer: Reducer<RootState> = combineReducers({
  counter
});

export default rootReducer;
