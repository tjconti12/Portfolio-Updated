import * as projectData from '../../resources/projects.json';

import { useLocation } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = ({ props }) => {
    // Getting the url parameter to query the correct data
    let fullPath = useLocation();
    // useLocation returns an object so I need the pathname property. This would be /projects/name
    // Then spliting it returns an array of ['/', 'projects', 'name']
    let path = fullPath.pathname.split('/')
    //  So I grab the third item
    let projectName = path[2]

    // Searching the data for the correct project based on its title
    let currentProject = projectData.default.find(obj => obj.title === projectName);
    
    return (
        <div className="project-detail-container">
            <h2 className="project-title">{currentProject.title}</h2>
            <h4 className="project-description">{currentProject.description}</h4>
            
            <h3 className="project-h3">Motivation</h3>
            <p className="project-p">{currentProject.motivation}</p>
            
            <h3 className="project-h3">Build Status</h3>
            <p className="project-p">{currentProject.buildStatus}</p>

            <h3 className="project-h3">Tech/Framework Used</h3>
            <p className="project-p">{currentProject.tech}</p>

            <h3 className="project-h3">Features</h3>
            <p className="project-p">{currentProject.features}</p>

            <div className="project-button-container">
                <a className="project-button" href={currentProject.repo} target="_blank" rel="noopener noreferrer">View Code</a>
                <a className="project-button" href={currentProject.url} target="_blank" rel="noopener noreferrer">Live Application</a>
            </div>
            <div className="project-images-container">
                {currentProject.photos.map(photo => {
                    return (
                        <div className="project-photo-container">
                            <img src={photo.url} alt={photo.legend} className="project-photo"/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectDetail
