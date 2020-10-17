import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import "./MainPage.css";
import Products from "../Products";
import Projects from "../Project/Projects";

function MainPage() {
  return (
    <div className="main-container">
      <video src="./marble.mp4" autoPlay loop muted />
      <h1> Your Home Beauty </h1>
      <p>Choose your favorite stones and Get Quote</p>
      <div className="main-btns">
        <Button
          href={Products}
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Quote
        </Button>
        <Button
          href="{Projects}"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Projects<i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default MainPage;
