import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import Main from './components/main.js';
import Header from './components/Header.js';

function App(){
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  )
}



ReactDOM.render(<App/>, document.getElementById('root'));