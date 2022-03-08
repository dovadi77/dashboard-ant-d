import { createStore, AnyAction, Store } from "redux";
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../actions/counterAction";

const counterReducer = (state = { value: 0 }, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 };
    case DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 };
    default:
      return { ...state };
  }
};

export default counterReducer;
