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
import AboutUs from "./components/aboutUs";
import { Route } from "react-router-dom";
import BookTicketPage from "./components/BookTicketPage";
import BookingHistory from "./components/BookingHistory";
import Topplista from "./components/Topplista";
import AdminPage from "./components/AdminPage";
import AdminProgram from "./components/AdminProgram";
import io from "socket.io-client";

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
    App.admin = "";
    App.isLoggedin = false;
    this.checkIfLoggedIn();
    App.socket = io("localhost:3001");
  }
  async checkIfLoggedIn() {
    this.loggedinUser = await Login.find();
    App.email = this.loggedinUser.email;
    App.isLoggedin = this.loggedinUser.email;

    NavBar.lastInstance.setState(state => NavBar.lastInstance);
  }

  static isLoggedin = false;
  loggedinUser = "";

  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <div className="container">
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
              <Route path="/mina-bokningar" component={BookingHistory} />
              <Route path="/movie/:id" component={Movies} />
              <Route path="/bokabiljett/:id" component={BookTicketPage} />
              <Route path="/topplista" component={Topplista} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/admin-update/:id" component={AdminProgram} />
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
