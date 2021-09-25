import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import { isMobile } from 'react-device-detect';

import logo from '../../resources/images/LogoBlack.png';
import backArrow from '../../resources/images/Arrowhead.png';

import './Header.css';
import Menu from '../Menu/Menu';
import HamburgerMenu from 'react-hamburger-menu';

const Header = ({ title, menuOpen, toggleMenu, handleResumeClick }) => {

    const history = useHistory();

    const goBack = () => history.goBack();

    // Dynamic path for the header
    // Allows user to return to the page that is being displayed by the header
    // splitting and joining to remove the space (example: /About Me changes to /AboutMe)
    const path = title.split(' ').join('');

    return (
        <div className="header-container">
            <div className="header-logo-container">
                <Link to="/"><img className="header-logo" src={logo} alt="Tyler Conti Logo" /></Link>
            </div>
            <div className="back-button-container">
                <img className="back-button" onClick={goBack} src={backArrow} alt="back arrow" />
            </div>
            <div className="header-hamburger-menu" style={{ marginRight: menuOpen && !isMobile && path !== '/' ? '15px' : '0px'}}>
            
            <HamburgerMenu 
                    className="hamburger-menu" 
                    isOpen={menuOpen} 
                    menuClicked={toggleMenu} 
                    color={menuOpen ? "white" : "black"} 
                    width={21}
                    height={14}    
                />
            </div>
            { menuOpen && <Menu toggleMenu={toggleMenu} handleResumeClick={handleResumeClick} />}
        </div>
    )
}

export default Header
