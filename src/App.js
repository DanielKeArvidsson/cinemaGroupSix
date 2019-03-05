import React, { Component } from "react";
import "./css/style.css";
import ShowPage from "./components/ShowPage";
import NavBar from './components/NavBar';
import Home from './components/home';
import Footer from './components/footer';
import { Switch, Route, Redirect } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
      
      
      <header>
      <NavBar />
      </header>
      
     <Switch>
      <main>
      <Route exact path="/" components={Home} />
      <Route path="/showpage" component={ShowPage} />
      </main>
      </Switch>
      
      
      <footer>
      <Footer />
      </footer>
      
      </div>
    );
  }
}

export default App;
