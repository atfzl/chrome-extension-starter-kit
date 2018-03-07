import { wrapStore } from 'react-chrome-redux';

import store from './store';

wrapStore(store, {
  portName: 'api-mock',
});
