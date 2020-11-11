import React, { Component } from 'react'
import formatCurrency from '../../util';
import "./ServiceRequest.css";

export default class ServiceRequest extends Component {
    render() {
const {requestedServices} = this.props;

        return (
          <div>
            {requestedServices.length === 0 ? (
              <div className="service-request service-request-header">
                There is not any requested services
              </div>
            ) : (
              <div className="service-request service-request-header">
                You have {requestedServices.length} requested services in your
                list.
              </div>
            )}
            <div className="request-service">
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
            </div>
            <div className="open-service-request">
              <div>
                <button className="button primary">Proceed</button>
              </div>
            </div>
          </div>
        );
    }
}
