import { createReducer, on } from '@ngrx/store';
import * as actions from './counter.actions';

const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(actions.increment, (state) => state + 1),
  on(actions.decrement, (state) => state - 1),
  on(actions.multiply, (state, { value }) => state * value),
  on(actions.divide, (state, { value }) => state / value),
  on(actions.reset, (state) => 0)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
