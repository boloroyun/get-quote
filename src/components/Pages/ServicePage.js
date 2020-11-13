import React, { Component } from "react";
import data from "../../data.json";
import Service from ".././Service/Service"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../Navbar/Navbar";
import ServiceRequest from "../ServiceRequest/ServiceRequest";

export default class ServicePage extends Component {
  constructor() {
    super();
    this.state = {
      services: data.services,
      requestedServices: localStorage.getItem("requestedServices")
        ? JSON.parse(localStorage.getItem("requestedServices"))
        : [],
    };
  }

  createServiceRequest = (order) => {
    alert(" Need to save request for" + order.name);
  };

  removeFromRequestedService = (service) => {
    const requestedServices = this.state.requestedServices.slice();
    this.setState({
      requestedServices: requestedServices.filter((x) => x._id !== service._id),
    });
    localStorage.setItem(
      "requestedServices",
      JSON.stringify(requestedServices.filter((x) => x._id !== service._id))
    );
  };
  sendServiceRequest = (service) => {
    const requestedServices = this.state.requestedServices.slice();
    let alreadyRequested = false;
    requestedServices.forEach((item) => {
      if (item._id === service._id) {
        item.count++;
        alreadyRequested = true;
      }
    });
    if (!alreadyRequested) {
      requestedServices.push({ ...service, count: 1 });
    }
    this.setState({ requestedServices });
    localStorage.setItem(
      "requestedServices",
      JSON.stringify(requestedServices)
    );
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <header>
          <a href="/services">Service request application</a>
        </header>
        <main>
          <div className="ser-content">
            <div className="ser-main">
              <Service
                services={this.state.services}
                sendServiceRequest={this.sendServiceRequest}
              ></Service>
            </div>
            <div className="ser-sidebar">
              <ServiceRequest
                requestedServices={this.state.requestedServices}
                removeFromRequestedService={this.removeFromRequestedService}
                createServiceRequest={this.createServiceRequest}
              />
            </div>
          </div>
        </main>
        <footer>Some explanation or videos</footer>
      </div>
    );
  }
}
