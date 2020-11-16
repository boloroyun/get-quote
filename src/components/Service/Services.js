import React, { Component } from 'react'
import "./Services.css";
import formatCurrency from "../../util"
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { connect } from 'react-redux';
import {fetchServices} from "../../actions/serviceActions"
import { sendServiceRequest } from "../../actions/serviceRequestActions";


class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: null,
    };
  }

  componentDidMount() {
    this.props.fetchServices();
  }
  openModal = (service) => {
    this.setState({ service });
  };
  closeModal = () => {
    this.setState({ service: null });
  };

  render() {
    const { service } = this.state;
    return (
      <div>
        <Fade left cascade>
          {!this.props.services ? (
            <div>Loading...</div>
          ) : (
            <ul className="services">
              {this.props.services.map((service) => (
                <li key={service._id}>
                  <div className="service">
                    <a href={"#" + service._id}>
                      <p>{service.description}</p>
                      <img src={service.src} alt={service.description}></img>
                    </a>
                    <div className="service-price">
                      <div>
                        {formatCurrency(service.price)} {""}{" "}
                        {service.priceDetail}
                      </div>
                      <button
                        onClick={() => this.props.sendServiceRequest(service)}
                        className="button primary"
                      >
                        Send Service Request
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Fade>
        {service && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                X
              </button>
              <div className="service-details" key={service._id}>
                <img src={service.src} alt={service.description}></img>
                <div className="service-details-description">
                  <h3>
                    <strong>{service.description}</strong>
                  </h3>
                  <p>Stone Type:</p>
                  <p>{service.description}</p>

                  <div className="service-price">
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.sendServiceRequest(service);
                        this.closeModal();
                      }}
                    >
                      Send Service Request
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

export default connect((state) => ({ services: state.services.items }), {
  fetchServices,
  sendServiceRequest
})(Services);
