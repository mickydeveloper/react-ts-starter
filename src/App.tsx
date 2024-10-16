import React from "react";

import "./app.css";

import logo from "./icons/logo.svg";

export default class App extends React.Component {
  render() {
    return (
      <div className="app" role="main">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <p>
            Edit <code>src/app.tsx</code> and save to reload.
          </p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
