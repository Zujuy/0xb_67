import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Table from './components/table';


ReactDOM.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
