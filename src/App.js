import React from 'react';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import ProductPage from "./components/Pages/ProductPage";
import ServicePage from "./components/Pages/ServicePage";
import SignupPage from "./components/Pages/SignupPage";
import Projects from "./components/Project/Projects"

class App extends React.Component {  

  render() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" component={ProductPage} />
          <Route path="/services" component={ServicePage} />
          <Route path="/sign-up" component={SignupPage} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    </>
  );
}
}

export default App;
