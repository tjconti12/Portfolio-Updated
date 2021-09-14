import { Link } from 'react-router-dom';

import background from '../../resources/images/backgroundHorizontal.jpg';

import './Menu.css';

const Menu = ({ toggleMenu }) => {


    return (
        <div className="menu">
            <ul className="menu-list-main">
                <Link className="link-tag" to="/AboutMe" onClick={toggleMenu}><li className="list-item-main">About Me</li></Link>
                <Link className="link-tag" to="/projects" onClick={toggleMenu}><li className="list-item-main list-item-projects">Projects</li></Link>
                <Link className="link-tag" to="/ContactMe" onClick={toggleMenu}><li className="list-item-main">Contact Me</li></Link>
            </ul>
            <div className="menu-background-container">
                <img className="menu-background-image" src={background} alt="background of clouds in the sky with a filter" />
            </div>
        </div>
    )
}

export default Menu
