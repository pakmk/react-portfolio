import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./containers/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route component={NoMatch} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
