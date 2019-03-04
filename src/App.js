import React, { Component } from "react";
import "./css/style.css";
import ShowPage from "./components/ShowPage";
import NavBar from './components/NavBar';
import StartPage from './components/StartPage';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <header>
      <NavBar />
      </header>
      
      <main>
      
      <Route exact path="/" components={StartPage} />
      <Route path="/showpage" component={ShowPage} />
      </main>

      <footer>
      <Footer />
      </footer>
      </div>
    );
  }
}

export default App;
