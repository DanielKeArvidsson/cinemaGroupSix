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
import AboutUs from "./components/AboutUs";
import { Route } from "react-router-dom";

class Login extends REST {
  async delete() {
    this._id = 1;
    // we set an id here, because the REST class
    // will complain if we try to call delete on an object without _id
    // - and we use delete to logout (see test.js)

    return super.delete();
  }

  static get baseRoute() {
    return "login/";
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    App.isLoggedin = false;
    this.checkIfLoggedIn();
  }
  async checkIfLoggedIn() {
    this.loggedinUser = await Login.find();
    App.isLoggedin = this.loggedinUser.email;
    NavBar.lastInstance.setState(state => NavBar.lastInstance);
  }

  static isLoggedin = false;
  loggedinUser = "";

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
            <Route path="/login" component={FormPage} />
            <Route path="/salongsinfo" component={SalongsInfo} />
            <Route path="/om_oss" component={AboutUs} />
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
