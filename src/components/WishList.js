import React, { Component } from 'react'
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { removeFromWishList } from "../actions/wishListActions";
import { createOrder, clearOrder } from "../actions/orderActions";

class WishList extends Component {
    constructor(props) {
        super(props);
        this.state= {
            flname: "",
            email: "",
            address: "",
            tel:"",
            projectDetails: "",
            showCheckout: false,
        };
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    createOrder = (e) => {
        e.preventDefault();
        const order = {
          flname: this.state.flname,
          email: this.state.email,
          address: this.state.address,
          tel: this.state.tel,
          projectDetails: this.state.projectDetails,
          wishListItems: this.props.wishListItems,
        };
        this.props.createOrder(order);
    };
closeModal = () => {
  this.props.clearOrder();
}

    render() {
        const { wishListItems, order } = this.props;
        return (
          <div>
            {wishListItems.length === 0 ? (
              <div className="wishlist wishlist-header">
                Your Wish List is empty
              </div>
            ) : (
              <div className="wishlist wishlist-header">
                You have {wishListItems.length} items in your Wish List{" "}
              </div>
            )}

            {order && (
              <Modal isOpen={true} onRequestClose={this.closeModal}>
                <Zoom>
                  <button className="close-modal" onClick={this.closeModal}>
                    x
                  </button>
                  <div className="order-details">
                    <h3 className="success-message">
                      Your request has been sent
                    </h3>
                    <h2>Quote Request Number {order._id}</h2>
                    <ul>
                      <li>
                        <div>Name:</div>
                        <div>{order.flname}</div>
                      </li>
                      <li>
                        <div>Email:</div>
                        <div>{order.email}</div>
                      </li>
                      <li>
                        <div>Address:</div>
                        <div>{order.address}</div>
                      </li>
                      <li>
                        <div>Phone Number:</div>
                        <div>{order.tel}</div>
                      </li>

                      <li>
                        <div>Date:</div>
                        <div>{order.createdAt}</div>
                      </li>

                      <li>
                        <div>Project Details:</div>
                        <div>{order.projectDetails}</div>
                      </li>
                      <li>
                        <div>Wish List Items:</div>
                        <div>
                          {order.wishListItems.map((x) => (
                            <div>{x.name}</div>
                          ))}
                        </div>
                      </li>
                    </ul>
                  </div>
                </Zoom>
              </Modal>
            )}

            <div>
              <div className="wishlist">
                <Fade left cascade>
                  <ul className="wishlist-items">
                    {wishListItems.map((item) => (
                      <li key={item._id}>
                        <div>
                          <img src={item.img} alt={item.name}></img>
                        </div>
                        <div>
                          <div>{item.name}</div>

                          <div className="right">
                            <button
                              className="button"
                              onClick={() =>
                                this.props.removeFromWishList(item)
                              }
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Fade>
              </div>
              {wishListItems.length !== 0 && (
                <div>
                  <div className="wishlist">
                    <button
                      onClick={() => {
                        this.setState({ showCheckout: true });
                      }}
                      className="button primary"
                    >
                      Proceed
                    </button>
                  </div>
                  {this.state.showCheckout && (
                    <Fade right cascade>
                      <div className="wishlist">
                        <form onSubmit={this.createOrder}>
                          <ul className="form-container">
                            <li>
                              <label>Email</label>
                              <input
                                name="email"
                                type="email"
                                required
                                onChange={this.handleInput}
                              ></input>
                            </li>
                            <li>
                              <label>Name</label>
                              <input
                                name="flname"
                                type="text"
                                required
                                onChange={this.handleInput}
                              ></input>
                            </li>
                            <li>
                              <label>Address</label>
                              <input
                                name="address"
                                type="text"
                                required
                                onChange={this.handleInput}
                              ></input>
                            </li>
                            <li>
                              <label>Phone Number</label>
                              <input
                                name="tel"
                                type="tel"
                                country="US"
                                required
                                onChange={this.handleInput}
                              />
                            </li>

                            <li>
                              <label>Project Details</label>
                              <textarea
                                className="project-details"
                                name="projectDetails"
                                type="text"
                                required
                                onChange={this.handleInput}
                                placeholder="Describe your project size and especial request."
                              ></textarea>
                            </li>
                            <li>
                              <button className="button primary" type="submit">
                                Get Quote
                              </button>
                            </li>
                          </ul>
                        </form>
                      </div>
                    </Fade>
                  )}
                </div>
              )}
            </div>
          </div>
        );
    }
}

export default connect(
  (state) => ({
    order: state.order.order,
  wishListItems: state.wishList.wishListItems,
}),
{removeFromWishList, createOrder, clearOrder }
)(WishList);