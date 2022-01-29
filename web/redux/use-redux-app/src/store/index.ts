import { createStore } from "redux";

const INCREASE_BY = "counter/INCREASE_BY" as const;

export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

type CounterAction = ReturnType<typeof increaseBy>;

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  if (action.type === INCREASE_BY) {
    return { count: state.count + action.payload };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
