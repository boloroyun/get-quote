import React, {Component} from 'react'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import ProductPage from "./components/Pages/ProductPage";
import ServicePage from "./components/Pages/ServicePage";
import AdminPage from "./components/Pages/AdminPage";
import Projects from "./components/Project/Projects"
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {  

  render() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>  
          <Route path="/" exact component={HomePage} />
          <Route path="/products" component={ProductPage} />
          <Route path="/services" component={ServicePage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
}

export default App;
