import React, { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const App = () => {
  useEffect(() => {
    // init materialize js
    M.AutoInit();
  });

  return <div className=''>hi</div>;
};

export default App;
