import React from 'react';
import ReactDOM from 'react-dom';
import App from './Table';
import NestedGrid from './Grid';

ReactDOM.render(
  <React.StrictMode>
    <NestedGrid/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);