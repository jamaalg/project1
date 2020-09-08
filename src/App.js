import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import CV from "./components/CV";
import Navbar from "./components/Navbar";
import Error from "./components/error/Error";
import Login from "./components/admin/Login";

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/cv" component={CV} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
