import { configureStore, Action } from '@reduxjs/toolkit';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { RootState } from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware as ThunkMiddleware<RootState, Action>]
});

export default store;
