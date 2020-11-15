import React, { Component } from "react";
import formatCurrency from "../../util";
import "./ServiceRequest.css";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";





export default class ServiceRequest extends Component {
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

  createServiceRequest = (e) => {
    e.preventDefault();
    const orderService = {
      email: this.state.email,
      name: this.state.name,
      address: this.state.address,
      tel: this.state.tel,
      details: this.state.details,
      chooseDate: this.state.chooseDate,
      requestedServices: this.props.requestedServices,
    };
    this.props.createServiceRequest(orderService);
  };

  closeModal = () => {
    this.setState({ showServiceRequest: null });
  };

  render() {
    const { requestedServices } = this.props;

    return (
      <div>
        {requestedServices.length === 0 ? (
          <div className="service-request service-request-header">
            There is not any requested services
          </div>
        ) : (
          <div className="service-request service-request-header">
            You have {requestedServices.length} requested services in your list.
          </div>
        )}
        <div className="service-request">
          <Fade left cascade>
            <ul className="requested-service-item">
              {requestedServices.map((item) => (
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
                          this.props.removeFromRequestedService(item)
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
        {requestedServices.length !== 0 && (
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
                    <form onSubmit={this.createServiceRequest}>
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
