import produce from 'immer';
import { Reducer } from 'redux';
export interface IListState {
  items: string[];
}

const listReducer: Reducer<IListState> = produce(
  (draft: IListState, action) => {
    switch (action.type) {
      case 'xx':
        draft.items = action.payload;
    }
  },
  { items: ['a', 'b', 3] }
);

export default listReducer;
