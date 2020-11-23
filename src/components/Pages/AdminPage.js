import React, { Component } from "react";
import Orders from "../Orders/Orders";
import Navbar from "../Navbar/Navbar";
import store from "../../store";
import { Provider } from "react-redux";


export default class  AdminPage extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="admin-page">
          <Navbar />
          <Orders />
        </div>
      </Provider>
    );
  }
}

