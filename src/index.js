import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';

const StoreInstance = Store();

const Root = () => (
  <Provider store={StoreInstance}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
);


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
