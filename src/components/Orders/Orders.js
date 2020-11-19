import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchOrders} from '../../actions/orderActions';
import "./Orders.css";

class Orders extends Component {
     componentDidMount() {
         this.props.fetchOrders();
     }
    render() {
const {orders} = this.props;
        return !orders ? (
          <div>Products and Services to get Quote</div>
        ) : (
          <div className="orders">
            <h2>Products and Services to get Quote</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>EMAIL</th>
                  <th>NAME</th>
                  <th>ADDRESS</th>
                  <th>PHONE NUMBER</th>
                  <th>PROJECT DETAILS</th>
                  <th>ITEMS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr>
                    <td>{order._id}</td>
                    <td>{order.createdAt}</td>
                    <td>{order.flname}</td>
                    <td>{order.email}</td>
                    <td>{order.address}</td>
                    <td>{order.tel}</td>
                    <td>{order.projectDetails}</td>
                    <td>
                      {order.wishListItems.map((item) => (
                        <div>{item.name}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
}

export default connect(
    (state) => ({ 
    orders: state.order.orders,
}),
{
    fetchOrders,
} 
)(Orders);