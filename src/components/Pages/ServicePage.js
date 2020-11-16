import React, { Component } from "react";
import Service from "../Service/Services"
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../Navbar/Navbar";
import ServiceRequest from "../ServiceRequest/ServiceRequest";
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
          <div className="ser-content">
            <div className="ser-main">
              <Service></Service>
            </div>
            <div className="ser-sidebar">
              <ServiceRequest/>
            </div>
          </div>
        </main>
        <footer>Some explanation or videos</footer>
      </div>
      </Provider>
    );
  }
}
