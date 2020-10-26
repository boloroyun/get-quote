import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import "./Projects.css";

import bath1 from "./Assets/bath1.jpg";
import bath3 from "./Assets/bath3.jpg";
import bath4 from "./Assets/bath4.jpg";
import kitchen from "./Assets/kitchen.jpg";
import kitchen2 from "./Assets/kitchen2.jpg";
import kitchen4 from "./Assets/kitchen4.jpg";
import kitchen5 from "./Assets/kitchen5.jpg";
import kitchen8 from "./Assets/kitchen8.jpg";


function Project(){
    return (
      <div className="projects">
        <Carousel>
          
          <div>
            <img src={bath1} alt="project-img" />
            <h2>Stone type and name</h2>
          </div>
          <div>
            <img src={kitchen4} alt="project-img" />
            <h2>Stone type and name</h2>
          </div>
          <div>
            <img src={bath3} alt="project-img" />
            <h2>Stone type and name</h2>
          </div>
          <div>
            <img src={bath4} alt="project-img" />
            <h2>Stone type and name</h2>
          </div>
          <div>
            <img src={kitchen} alt="project-img" />
            <h2>Stone type and name</h2>
          </div>
          <div>
            <img src={kitchen5} alt="project-img" />
            <h2>Stone type and name</h2>
          </div>
          <div>
            <img src={kitchen2} alt="project-img" />
            <h2>Stone type and name</h2>
          </div>
          <div>
            <img src={kitchen8} alt="project-img" />
            <h2>Stone type and name</h2>
          </div>
        </Carousel>
      </div>
    );
}

export default Project;