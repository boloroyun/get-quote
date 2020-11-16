import React, { Component } from "react";
import formatCurrency from "../../util";
import "./ServiceRequest.css";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { removeFromServiceRequest } from "../../actions/serviceRequestActions";
import { createOrderService, clearOrderService } from "../../actions/orderServiceActions";





class ServiceRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      address: "",
      tel: "",
      details: "",
      chooseDate: "",
      showServiceRequest: false,
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createOrderService = (e) => {
    e.preventDefault();
    const orderService = {
      email: this.state.email,
      name: this.state.name,
      address: this.state.address,
      tel: this.state.tel,
      details: this.state.details,
      chooseDate: this.state.chooseDate,
      serviceRequestItems: this.props.serviceRequestItems,
    };
    this.props.createOrderService(orderService);
  };

  closeModal = () => {
    this.setState({ showServiceRequest: null });
  };

  render() {
    const { serviceRequestItems, orderService } = this.props;

    return (
      <div>
        {serviceRequestItems.length === 0 ? (
          <div className="service-request service-request-header">
            There is not any requested services
          </div>
        ) : (
          <div className="service-request service-request-header">
            You have {serviceRequestItems.length} requested services in your
            list.
          </div>
        )}

        {orderService && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="order-service-details">
                <h3 className="success-message">Your request has been sent</h3>
                <h2>Order {orderService._id}</h2>
                <ul>
                  <li>
                    <div>Email:</div>
                    <div>{orderService.email}</div>
                  </li>
                  <li>
                    <div>Name:</div>
                    <div>{orderService.name}</div>
                  </li>

                  <li>
                    <div>Address:</div>
                    <div>{orderService.address}</div>
                  </li>
                  <li>
                    <div>Phone number:</div>
                    <div>{orderService.tel}</div>
                  </li>

                  <li>
                    <div>Date:</div>
                    <div>{orderService.createdAt}</div>
                  </li>

                  <li>
                    <div>Requested Service Details:</div>
                    <div>{orderService.details}</div>
                  </li>
                  <li>
                    <div>Requested Services:</div>
                    <div>
                      {orderService.serviceRequestItems.map((y) => (
                        <div>{y.description}</div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        )}

        <div className="service-request">
          <Fade left cascade>
            <ul className="requested-service-item">
              {serviceRequestItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.src} alt={item.description}></img>
                  </div>
                  <div>
                    {item.description}
                    <div className="right">
                      {formatCurrency(item.price)}{" "}
                      <button
                        className="button"
                        onClick={() =>
                          this.props.removeFromServiceRequest(item)
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
        {serviceRequestItems.length !== 0 && (
          <div>
            <div className="service-request">
              <div className="total">
                <button
                  onClick={() => {
                    this.setState({ showServiceRequest: true });
                  }}
                  className="button primary"
                >
                  Proceed
                </button>
              </div>
            </div>
            {this.state.showServiceRequest && (
              <Modal isOpen={true} onRequestClose={this.closeModal}>
                <Zoom>
                  <button className="close-modal" onClick={this.closeModal}>
                    X
                  </button>
                  <div className="service-request-form">
                    <h3>Service Request Form</h3>
                    <form onSubmit={this.createOrderService}>
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
                          <label>Requested Service Details</label>
                          <input
                            name="details"
                            type="text"
                            placeholder="Tell us more about your service request"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Choose date</label>
                          <input
                            name="chooseDate"
                            type="date"
                            placeholder="Choose date of service "
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <button className="button primary" type="submit">
                            Send Service Request
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </Zoom>
              </Modal>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    orderService: state.orderService.orderService,
    serviceRequestItems: state.serviceRequest.serviceRequestItems,
  }),
  { removeFromServiceRequest, createOrderService, clearOrderService }
)(ServiceRequest);