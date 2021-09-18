import { Link } from 'react-router-dom';

import ProjectCard from '../ProjectCard/ProjectCard';
import * as projectInfo from '../../resources/projects.json';

import './Projects.css';

const Projects = () => {
    return (
        <div className="project-list-container">
            {projectInfo.default.map((project) => <Link className="project-link" to={`/projects/${project.title}`}><ProjectCard title={project.title} displayPhoto={project.cover}/></Link>)}
        </div>
    )
}

export default Projects
