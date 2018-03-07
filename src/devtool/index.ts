import { Store } from 'react-chrome-redux';

const store = new Store({
  portName: 'api-mock',
});

console.log('devtool');

const render = () => {
  const state = store.getState();

  if (state && state.data) {
    const { data } = state;
    console.log(data);

    const app = document.getElementById('app') as HTMLDivElement;

    app.innerHTML = data;
  }
};

store.ready(() => {
  render();

  store.subscribe(() => {
    console.log(store.getState());
    render();
  });
});
