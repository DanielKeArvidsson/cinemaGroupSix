import React, { Component } from "react";
import REST from "./REST";
import "./index.css";
import ShowPage from "./components/ShowPage";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import Movies from "./components/Movies";
import FormPage from "./components/FormPage";
import Footer from "./components/footer";
import SalongsInfo from "./components/salongsinfo";
import AboutUsPage from "./components/aboutUs";
import { Route } from "react-router-dom";
import LogoutPage from "./components/LogoutPage";

class Login extends REST {}

class App extends Component {
  static isLoggedin = false;
  loggedinUser = "";

  async checkIfLoggedIn() {
    this.isLoggedin = true;
    this.loggedinUser = await Login.find();
    NavBar.lastInstance.setState(state => NavBar.lastInstance);
  }

  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <NavBar />
          </div>

        <div className="main">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/showpage" component={ShowPage} />
          <Route path="/login" component={FormPage} />
          <Route path="/logout" component={LogoutPage} />
          <Route path="/salongsinfo" component={SalongsInfo} />
          <Route path="/aboutUs" component={AboutUsPage} />
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
