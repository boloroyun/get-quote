import React, { Component } from 'react'
import formatCurrency from "../util";

export default class WishList extends Component {
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
                <ul className="wishlist-items">
                  {wishListItems.map((item) => (
                    <li key={item._id}>
                      <div>
                        <img src={item.img} alt={item.name}></img>
                      </div>
                      <div>
                        <div>{item.name}</div>
                        <div className="right">
                          {formatCurrency(item.price)} * {item.count}{" "}
                          <button
                            className="button"
                            onClick={() => this.props.removeFromWishList(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {wishListItems.length !== 0 && (
                <div className="wishlist">
                  <button className="button primary">Get Quote</button>
                </div>
              )}
            </div>
          </div>
        );
    }
}
