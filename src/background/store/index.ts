import { createStore, applyMiddleware } from 'redux';

interface IState {
  data: string;
}

const INITIAL_STATE: IState = {
  data: '',
};

const reducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_DATA':
      return { ...state, data: payload };
    default:
      return state;
  }
};

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger').createLogger;
  middlewares.push(createLogger({ collapsed: true }));
}

const enhancer = applyMiddleware(...middlewares);

export default createStore(reducer, undefined, enhancer);
