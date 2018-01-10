import React, { Component } from 'react';
import './App.css';
import "./materialize/css/materialize.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Score from './components/Score';
import MainPart from './components/MainPart';

class App extends Component {
  render() {
    return (
      <div>
      <Header>1</Header>
      <Score></Score>
      <MainPart>1</MainPart>
      <Footer>1</Footer></div>
      
      );
  }
}

export default App;
