import * as types from './actionTypes';

export function incrementCount() {
  return (dispatch) => {
    dispatch(incrementCountSuccess());
  }
}

export function incrementCountSuccess() {
  return {type: types.INCREMENT_COUNT};
}

export function decrementCount() {
  return (dispatch) => {
    dispatch(decrementCountSuccess());
  }
}

export function decrementCountSuccess() {
  return {type: types.DECREMENT_COUNT};
}