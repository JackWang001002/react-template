import produce from 'immer';
import { Reducer } from 'redux';

export interface IHomeState {
  counter: number;
}
const homeReducer: Reducer<IHomeState, IAction> = (
  state = { counter: 0 },
  action
) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'add':
        draft.counter += action.payload;
        break;
      case 'sub':
        draft.counter -= action.payload;
        break;
      default:
    }
  });
};

export default homeReducer;
