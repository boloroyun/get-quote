import React, { Component } from "react";
import Orders from "../Orders/Orders";
import Navbar from "../Navbar/Navbar";

export default class  AdminPage extends Component {
  render() {
    return (
    <div className="admin-page">
      <Navbar />
      <Orders />
      </div>
    );
  }
}

