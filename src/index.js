import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './components/App';

const middleWares = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextRootContainer = require('./components/App').default;
    render(NextRootContainer);
  });
}
