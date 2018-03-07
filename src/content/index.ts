import { Store } from 'react-chrome-redux';

const store = new Store({
  portName: 'api-mock',
});

const injectScript = (script: string) => {
  const s = document.createElement('script');

  const src = chrome.extension.getURL(script);

  s.src = src;
  s.onload = function() {
    this.remove();
  };

  document.documentElement.appendChild(s);
};

injectScript('inject.bundle.js');

window.addEventListener('message', (event: MessageEvent) => {
  // // We only accept messages from ourselves
  if (event.source !== window) {
    console.log(event.source, window);
    return;
  }

  if (event.data.source && event.data.source === 'api-mock') {
    store.ready().then(() => {
      store.dispatch({ type: 'UPDATE_DATA', payload: event.data.payload });
    });
  }
});
