import React, {Component} from "react";
import "../../App.css";
import { Button } from "../Button/Button";
import "./MainPage.css";
import { Link } from "react-router-dom";


export default class MainPage extends Component {
  render() {
  return (
    <div className="main-container">
      <video src="./video1.mp4" autoPlay loop muted />
      <h1> Your Home Beauty </h1>
      <p>Choose your favorite stones and Get Quote</p>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <Link to="/products">Get Quote</Link>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          <Link to="/projects">Watch Projects</Link>
          <i className="far fa-play-circle" />
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <Link to="/products">Service Request</Link>
        </Button>
      </div>
    </div>
  );
  }
}

