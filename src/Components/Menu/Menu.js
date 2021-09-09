import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
    const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);

    const toggleProjectsExpanded = () => {
        isProjectsExpanded ? setIsProjectsExpanded(false) : setIsProjectsExpanded(true);
    }

    return (
        <div className="menu">
            <ul className="menu-list-main">
                <li className="list-item-main">About Me</li>
                <li onClick={toggleProjectsExpanded} className="list-item-main list-item-projects">Projects</li>
                {isProjectsExpanded && <ul className="menu-list-secondary">
                    <Link className="link-tag" to="/projects/project1"><li className="list-item-secondary">Project 1</li></Link>
                    <Link className="link-tag" to="/projects/project2"><li className="list-item-secondary">Project 2</li></Link>
                    <Link className="link-tag" to="/projects/project3"><li className="list-item-secondary">Project 3</li></Link>
                    <Link className="link-tag" to="/projects/project4"><li className="list-item-secondary">Project 4</li></Link>
                    <Link className="link-tag" to="/projects/project5"><li className="list-item-secondary">Project 5</li></Link>
                    <Link className="link-tag" to="/projects/project6"><li className="list-item-secondary">Project 6</li></Link>
                    <Link className="link-tag" to="/projects/project7"><li className="list-item-secondary">Project 7</li></Link>
                    <Link className="link-tag" to="/projects"><li className="list-item-secondary">View All</li></Link>
                </ul>}
                <li className="list-item-main">Contact Me</li>
            </ul>
        </div>
    )
}

export default Menu
