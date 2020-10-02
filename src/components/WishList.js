import React, { Component } from 'react'
import Fade from "react-reveal/Fade";

export default class WishList extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "",
            email: "",
            address: "",
            projectDetails: "",
            showCheckout: false
        };
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value });
    };

    createOrder = (e) => {
        e.preventDefault();
        const order = {
          name: this.state.name,
          email: this.state.email,
          address: this.state.address,
          projectDetails: this.state.projectDetails,
          wishListItems: this.props.wishListItems,
        };
        this.props.createOrder(order);
    };

    render() {
        const { wishListItems } = this.props;
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
                          <label>Insert your project size!</label>
                          <input
                            className="sqFoot"
                            name="sqFoot"
                            type="number"
                            placeholder="sq.foot"
                            onChange={this.handleInput}
                          ></input>

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
                                name="name"
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
                              <label>Project Details</label>
                              <input
                                name="projectDetails"
                                type="text"
                                required
                                onChange={this.handleInput}
                              ></input>
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
