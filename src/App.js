import React, { Component } from "react";
import "./css/style.css";
import ShowPage from "./components/ShowPage";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import Movies from "./components/Movies";
import Footer from "./components/footer";
import SalongsInfo from "./components/salongsinfo";
import AboutUsPage from "./components/aboutUs";
import { Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
        <div className="App-header">
        <NavBar />
        </div>

        <div className="main">
          <Route exact path="/" component={Home} />
          <Route exact path="/start" component={Home} />
          <Route path="/visningar" component={ShowPage} />
          <Route path="/salongsinfo" component={SalongsInfo} />
          <Route path="/om-oss" component={AboutUsPage} />
          <Route path="/movie/:id" component={Movies} />
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
      </div>
    );
  }
}

export default App;
