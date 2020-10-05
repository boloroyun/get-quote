// feature 1
import React from 'react';
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import WishList from './components/WishList';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      products: data.products,
      wishListItems: localStorage.getItem("wishListItems")
      ? JSON.parse(localStorage.getItem("wishListItems"))
      : [],
      section: "",
      sort: "",
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



  sortProducts = (event) => {
    //imp
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a,b) => 
      sort === "lowest"
      ? a.price > b.price 
      ? 1
      : -1
      : sort === "highest"
      ? a.price < b.price
      ? 1
      : -1
      : a._id < b._id
      ? 1
      : -1
),
    }));
  };

  filterProducts = (event) => {
    //imp
    console.log
    (event.target.value);
    if(event.target.value === ""){
      this.setState({section: event.target.value, products: data.products});
    } else {
      this.setState({
        section: event.target.value,
        products: data.products.filter(
          (product) => product.section.indexOf(event.target.value) >= 0
        ),
      });
    };
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
              <Filter
                count={this.state.products.length}
                section={this.state.section}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products
                products={this.state.products}
                addToWishList={this.addToWishList}
              ></Products>
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
