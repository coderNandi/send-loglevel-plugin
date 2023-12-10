import logo from "./logo.svg";
import React, {useEffect} from "react";
import "./App.css";
import log from "loglevel";

import {initiatePlugin} from './util/LogLevelplugin';
function App() {
  const sendLogs = (message) => {};

  useEffect(() => {
    initiatePlugin(log);
  });

  const pressButton = () => {
    //console.log("got clicked here");
    log.info('yu hoooooo')
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={pressButton}>click me</button>
        <button onClick={pressButton}>click 2</button>
      </header>
    </div>
  );
}

export default App;
