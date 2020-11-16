import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrderServices } from "../../actions/orderServiceActions";
import "./OrderServices.css";

class OrderServices extends Component {
  componentDidMount() {
    this.props.fetchOrderServices();
  }
  render() {
    const { orderServices } = this.props;
    return !orderServices ? (
      <div>Service Request</div>
    ) : (
      <div className="order-services">
        <h2>Service Request</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>EMAIL</th>
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>PHONE NUMBER</th>
              <th>SERVICE DETAILS</th>
              <th>CHOOSE DATE</th>
              <th>SERVICE ITEMS</th>
            </tr>
          </thead>
          <tbody>
            {orderServices.map((orderService) => (
              <tr>
                <td>{orderService._id}</td>
                <td>{orderService.createdAt}</td>
                <td>{orderService.email}</td>
                <td>{orderService.name}</td>
                <td>{orderService.address}</td>
                <td>{orderService.tel}</td>
                <td>{orderService.details}</td>
                <td>
                  {orderService.serviceRequestItems.map((item) => (
                    <div>{item.description}</div>
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
    orderServices: state.orderService.orderServices,
  }),
  {
    fetchOrderServices,
  }
)(OrderServices);