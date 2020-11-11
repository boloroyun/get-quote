import React, { Component } from 'react'
import Products from "../Products";
import Filter from "../Filter";
import WishList from "../WishList";
import store from "../../store";
import { Provider } from "react-redux";
import Navbar from "../Navbar/Navbar";


export default class ProductPage extends Component {
  render() {
  return (
    <Provider store={store}>
      <div className="grid-container">
        <Navbar />
        <h3>
          You can choose your favorite stones and get quote on each of them{" "}
        </h3>

        <main>
          <div className="content">
            <div className="main">
              <Filter></Filter>
              <Products></Products>
            </div>
            <div className="sidebar">
              <WishList />
            </div>
          </div>
        </main>
      </div>
    </Provider>
  );
};

}