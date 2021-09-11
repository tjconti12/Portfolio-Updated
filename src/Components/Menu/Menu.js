import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = ({ toggleMenu }) => {


    return (
        <div className="menu">
            <ul className="menu-list-main">
                <li className="list-item-main">About Me</li>
                <Link className="link-tag" to="/projects" onClick={toggleMenu}><li className="list-item-main list-item-projects">Projects</li></Link>
                <li className="list-item-main">Contact Me</li>
            </ul>
        </div>
    )
}

export default Menu
