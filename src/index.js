import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './redux/store/configureStore';
import './style/all.scss';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';

const ProviderApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>
);


ReactDOM.render(<ProviderApp />, document.getElementById('root'));
registerServiceWorker();
