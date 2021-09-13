import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = ({ toggleMenu, backGroundColor }) => {


    return (
        <div className="menu" style={{backgroundColor: backGroundColor}}>
            <ul className="menu-list-main">
                <Link className="link-tag" to="/AboutMe" onClick={toggleMenu}><li className="list-item-main">About Me</li></Link>
                <Link className="link-tag" to="/projects" onClick={toggleMenu}><li className="list-item-main list-item-projects">Projects</li></Link>
                <li className="list-item-main">Contact Me</li>
            </ul>
        </div>
    )
}

export default Menu
