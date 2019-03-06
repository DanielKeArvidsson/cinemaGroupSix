import React, { Component } from "react";
import "./css/style.css";
import ShowPage from "./components/ShowPage";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import Footer from "./components/footer";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App Site">
        <header>
          <NavBar />
        </header>

        <main className="Site-content">
          <Route path="/home" component={Home} />
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
