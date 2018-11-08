import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import Contact from '../Contact/Contact';
import RouterURL from '../RouterURL/RouterURL';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav></Nav>
          <div className="container" id="maincontain">
            <RouterURL></RouterURL>
            <Footer></Footer>
          </div> 
        </div>
      </Router>
    );
  }
}

export default App;
