import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { connect } from "react-redux";
import {fetchProducts} from "../actions/productActions";
import {addToWishList} from "../actions/wishListActions";

  class Products extends Component {
  constructor(props) {
  super(props);
this.state = {
  product: null,
};
}
componentDidMount() {
  this.props.fetchProducts();
}
openModal = (product) => {
  this.setState({product});
};
closeModal = () => {
  this.setState({product:null});
}

  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <ul className="products">
              {this.props.products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <a
                      href={"#" + product._id}
                      onClick={() => this.openModal(product)}
                    >
                      <img src={product.img} alt={product.name}></img>
                      <p>{product.name}</p>
                    </a>
                    <div className="product-price">
                      <button
                        onClick={() => this.props.addToWishList(product)}
                        className="button primary"
                      >
                        Add to Wish List
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Fade>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                X
              </button>
              <div className="product-details" key={product._id}>
                <img src={product.img} alt={product.name}></img>
                <div className="product-details-description">
                  <h3>
                    <strong>{product.name}</strong>
                  </h3>
                  <p>Stone Type: {product.section}</p>
                  <p>{product.description}</p>

                  <div className="product-price">
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.addToWishList(product);
                        this.closeModal();
                      }}
                    >
                      Add to Wish List
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({products: state.products.filteredItems}),
  {
  fetchProducts,
  addToWishList
}
)(Products);