import React, { Component } from "react";
import "./css/style.css";
import ShowPage from "./components/ShowPage";
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import StartPage from './components/StartPage';
import Footer from './components/Footer';
// import './css/style.css';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowPage />
      
      <header>
      <NavBar />
      </header>
      
      <main>
      <Route exact path="/" components={StartPage} />
      </main>

      <footer>
      <Footer />
      </footer>
      </div>
    );
  }
}

export default App;
