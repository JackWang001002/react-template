import { createStore } from 'redux';
import React from 'react';
import { Provider } from 'react-redux';
import { store as AppStore } from '../src/reducer/store';

type StoreType = ReturnType<typeof createStore>;

const wrapComponentIntoRedux = (
  WrappedComponent: React.FC,
  store?: StoreType
): React.ReactElement => {
  const nStore = store || AppStore;
  return (
    <Provider store={nStore}>
      <WrappedComponent />
    </Provider>
  );
};

export { wrapComponentIntoRedux };
