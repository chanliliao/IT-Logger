import React, { useEffect, Fragment } from 'react';
import './App.css';
import SearchBar from './component/layout/SearchBar';
import Logs from './component/logs/Logs';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const App = () => {
  useEffect(() => {
    // init materialize js
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
