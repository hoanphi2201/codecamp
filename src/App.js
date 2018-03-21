import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Main from './component/main';

class App extends Component {
  render() {
    return (
      <div>
      <div className="header">
        <Header />
      </div>
        <Main />
      </div>
    );
  }
}
export default App;
