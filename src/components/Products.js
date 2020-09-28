import React, { Component } from "react";
import formatCurrency from "../util";

export default class extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.img} alt="product.name"></img>
                  <p>{product.name}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button onClick={() => this.props.addToWishList(product)} className="button primary">
                    Add to Wish List
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
