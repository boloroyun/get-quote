// feature 1
import React from 'react';
import Products from "./components/Products";
import Filter from "./components/Filter";
import WishList from './components/WishList';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      wishListItems: localStorage.getItem("wishListItems")
      ? JSON.parse(localStorage.getItem("wishListItems"))
      : [],
    };
  }

createOrder = (order) => {
  alert("Need to save order for " + order.name);
};

removeFromWishList = (product) => {
  const wishListItems = this.state.wishListItems.slice();
  this.setState({
    wishListItems: wishListItems.filter((x) => x._id !== product._id),
  });
  localStorage.setItem("wishListItems", 
  JSON.stringify(wishListItems.filter((x) => x._id !== product._id))
  );
};

  addToWishList = (product) => {
    const wishListItems = this.state.wishListItems.slice();
    let alreadyInWishList = false;
    wishListItems.forEach((item) => {
    if (item._id === product._id) {
        item.count++;
        alreadyInWishList = true;
      }
    });
    if (!alreadyInWishList) {
      wishListItems.push({ ...product, count: 1 });
    }
    this.setState({ wishListItems});
    localStorage.setItem("wishListItems", JSON.stringify(wishListItems));
  };



  
  render(){
  return (
    <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">Countertop Get Quote</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter></Filter>
              <Products addToWishList={this.addToWishList}></Products>
            </div>
            <div className="sidebar">
              <WishList
                wishListItems={this.state.wishListItems}
                removeFromWishList={this.removeFromWishList}
                createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
        <footer>All right is reserved</footer>
      </div>
    </Provider>
  );
}
}

export default App;
