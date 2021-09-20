import { Link } from 'react-router-dom';

import ProjectCard from '../ProjectCard/ProjectCard';
import * as projectInfo from '../../resources/projects.json';

import './Projects.css';
import UpArrow from '../UpArrow/UpArrow';

const Projects = () => {
    return (
        <div className="project-container">
            <h1 className="project-h1">Projects</h1>
            <div className="project-list-container">
                {projectInfo.default.map((project) => <Link className="project-link" to={`/projects/${project.title}`}><ProjectCard title={project.title} displayPhoto={project.cover} className="project-card"/></Link>)}
            </div>
            <UpArrow />
        </div>
    )
}

export default Projects
