import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import UI from "./Login/login";

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    <UI />
  </React.StrictMode>,
  document.getElementById('root')
);
