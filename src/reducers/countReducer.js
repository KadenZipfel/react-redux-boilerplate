import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function countReducer(state = initialState.counter, action) {
  console.log(state)
  switch(action.type) {
    case types.INCREMENT_COUNT:
      return {...state, count: state.count + 1};
    case types.DECREMENT_COUNT:
      return {...state, count: state.count - 1};
    default:
      return state;
  }
}