import { createStore } from 'redux';
import React from 'react';
import { Provider } from 'react-redux';
import { store as AppStore } from '../src/reducer/store';

type StoreType = ReturnType<typeof createStore>;

const wrapComponentIntoRedux = (
  WrappedComponent: React.FC,
  store: StoreType = AppStore
): React.ReactElement => {
  return (
    <Provider store={store}>
      <WrappedComponent />
    </Provider>
  );
};

export { wrapComponentIntoRedux };
