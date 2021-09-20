import backgroundImage from '../../resources/images/backgroundHorizontal.jpg';
import logo from '../../resources/images/LogoWhite.png';

import HamburgerMenu from 'react-hamburger-menu';

import './Banner.css';
import Menu from '../Menu/Menu';

const Banner = ({ menuOpen, toggleMenu }) => {
    

    return (
        <div className="banner-container">
            {!menuOpen && 
                <div className="banner-logo-container">
                    <img className="banner-logo" src={logo} alt="Tyler Conti Logo" />
                </div>
            }
            <div className="banner-background-container">
                <img className="banner-background-image" src={backgroundImage} alt="background of clouds in the sky with a filter" />
            </div>
            <div className="banner-hamburger-menu">
                <HamburgerMenu 
                        className="hamburger-menu" 
                        isOpen={menuOpen} 
                        menuClicked={toggleMenu} 
                        color={"white"} 
                        width={21}
                        height={14}    
                    />
            </div>
            { menuOpen && <Menu toggleMenu={toggleMenu} />}
        </div>
    )
}

export default Banner
