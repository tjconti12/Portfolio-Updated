import { Link, useLocation } from 'react-router-dom';


import background from '../../resources/images/backgroundHorizontal.jpg';

import './Menu.css';

const Menu = ({ toggleMenu, handleResumeClick }) => {

    let fullPath = useLocation();
    let path = fullPath.pathname;

    return (
        <div className="menu">
            <ul className="menu-list-main">
                <Link className="link-tag" to="/AboutMe" onClick={toggleMenu}><li className="list-item-main">About Me</li></Link>
                <Link className="link-tag" to="/projects" onClick={toggleMenu}><li className="list-item-main">Projects</li></Link>
                <Link className="link-tag" to="/ContactMe" onClick={toggleMenu}><li className="list-item-main">Contact Me</li></Link>
                <a className="list-item-main link-tag" onClick={handleResumeClick} href="https://drive.google.com/file/d/1K3KIL9UTxakfBTXfYe8c5H73BTG26-Ot/view?usp=sharing" target="_blank" rel="noopener noreferrer" >View Resume</a>
            </ul>
            {path !== '/' &&
            <div className="menu-background-container">
                <img className="menu-background-image" src={background} alt="background of clouds in the sky with a filter" />
            </div>
            }
        </div>
    )
}

export default Menu
