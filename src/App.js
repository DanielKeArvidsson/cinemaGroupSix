import React, { Component } from "react";
import REST from "./REST";
import "./index.css";
import ShowPage from "./components/ShowPage";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import FormPage from "./components/FormPage";
import Footer from "./components/footer";
import { Route } from "react-router-dom";
import LogoutPage from "./components/LogoutPage";

class Login extends REST{};

class App extends Component {

  static isLoggedin=false;
  loggedinUser ="";

  async checkIfLoggedIn() {
    this.isLoggedin = true;
    this.loggedinUser = await Login.find();    
     console.log(this.isLoggedin, "coming from app boolean")
     console.log(this.loggedinUser, "coming from app user from await find")
   // if (this.loggedinUser.error) { this.loggedinUser = false; }
    NavBar.lastInstance.setState(state => NavBar.lastInstance );
  }

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
          <Route path="/logout" component={LogoutPage} />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
