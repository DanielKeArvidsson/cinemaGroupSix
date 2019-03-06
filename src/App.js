import React, { Component } from "react";
import "./index.css";
import ShowPage from "./components/ShowPage";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import FormPage from "./components/FormPage";
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
          <Route path="/login" component={FormPage} />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
