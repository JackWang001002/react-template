import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import homeReducer from '../pages/Home/reducer';
import listReducer from '../pages/List/reducer';
import { createLogger } from 'redux-logger';

const reducerMap = {
  home: homeReducer,
  list: listReducer,
};

const reducer = combineReducers(reducerMap);
type IReducerMap = typeof reducerMap;

export type IState = { [k in keyof IReducerMap]: ReturnType<IReducerMap[k]> };

console.log(window.__REDUX_DEVTOOLS_EXTENSION__);
// const enhancedCompose:typeof compose = (...args: any[]) => compose(...args.filter(e => !!e));

const __TEST__ = !window.__REDUX_DEVTOOLS_EXTENSION__;

const enhance = !__TEST__
  ? compose(
    applyMiddleware(promise, createLogger({ collapsed: true })),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  : applyMiddleware(promise, createLogger({ collapsed: true }));

const store = createStore(reducer, enhance);

export { store };
