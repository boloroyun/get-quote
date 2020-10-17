import React from 'react'
import {Link} from 'react-router-dom';

function ProjectItem(props) {
    return (
        <>
            <li className="project-item">
                <Link className="project-item-link" to={props.path}>
                    <figure className="project-item-img-wrap" data-category={props.label}>
                        <img src={props.src} alt="project-img" className="project-item-img" />
                    </figure>
                    <div className="project-item-info">
    <h5 className="project-item-text">{props.text}</h5>
                    </div>
                </Link>
                </li>
        </>
    )
}

export default ProjectItem;
