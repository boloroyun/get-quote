import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'

const Projects = () => {
    return (
      <div className="projects">
        <h1>Our Projects</h1>
        <div className="projects-container">
          <div className="projects-wrapper">
            <ul className="projects-items">
              <ProjectItem
                src="project-img/bath1.jpg"
                text="Bathroom countertop"
                label="Stone name and type"
                path="/projects"
              />
              <ProjectItem
                src="project-img/bath2.jpg"
                text="Bathroom countertop"
                label="Stone name and type"
                path="/projects"
              />
              <ProjectItem
                src="project-img/bath3.jpg"
                text="Bathroom countertop"
                label="Stone name and type"
                path="/projects"
              />
              <ProjectItem
                src="project-img/bath2.jpg"
                text="Bathroom countertop"
                label="Stone name and type"
                path="/projects"
              />
              <ProjectItem
                src="project-img/bath3.jpg"
                text="Bathroom countertop"
                label="Stone name and type"
                path="/projects"
              />
              <ProjectItem
                src="project-img/bath3.jpg"
                text="Bathroom countertop"
                label="Stone name and type"
                path="/projects"
              />
              <ProjectItem
                src="project-img/bath2.jpg"
                text="Bathroom countertop"
                label="Stone name and type"
                path="/projects"
              />
              <ProjectItem
                src="project-img/bath3.jpg"
                text="Bathroom countertop"
                label="Stone name and type"
                path="/projects"
              />
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Projects;