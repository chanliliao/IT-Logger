import React, { useEffect, Fragment } from 'react';
import './App.css';
import SearchBar from './component/layout/SearchBar';
import Logs from './component/logs/Logs';
import AddBtn from './component/layout/AddBtn';
import AddLogModal from './component/logs/AddLogModal';
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
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
