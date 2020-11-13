import React, { Component } from 'react'
import "./Service.css";
import formatCurrency from "../../util"
import Fade from "react-reveal/Fade";


export default class Service extends Component {
    render() {
        return (
          <div>
          <Fade left cascade>
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
                        {formatCurrency(service.price)} {""} {service.priceDetail}
                      </div>
                      <button onClick={() => this.props.sendServiceRequest(service)} className="button primary">
                        Send Service Request
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            </Fade>
          </div>
        );
    }
}
