import React from 'react'
import Products from "../Products";
import Filter from "../Filter";
import WishList from "../WishList";
import store from "../../store";
import { Provider } from "react-redux";


export default function ProductPage() {
  return (
        <Provider store={store}>
          <div className="grid-container">
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

