import React, { Component } from "react";
import Orders from "../Orders/Orders";
import Navbar from "../Navbar/Navbar";
import OrderServices from "../OrderServices/OrderServices";

export default class  AdminPage extends Component {
  render() {
    return (
    <div className="admin-page">
      <Navbar />
      <Orders />
      <OrderServices />
      </div>
    );
  }
}

