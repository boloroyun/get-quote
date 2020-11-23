import React, { Component } from "react";
import Service from "../Service/Services"
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../Navbar/Navbar";
import WishList from "../WishList";
import store from "../../store";
import { Provider } from "react-redux";



export default class ServicePage extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Navbar />
          <header>
            <a href="/services">Service request application</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Service></Service>
              </div>
              <div className="sidebar">
                <WishList />
              </div>
            </div>
          </main>
          <footer>Some explanation or videos</footer>
        </div>
      </Provider>
    );
  }
}
