import { isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';

import HamburgerMenu from 'react-hamburger-menu';

import './HamburgerMenuComponent.css';

const HamburgerMenuComponent = ({ toggleMenu, menuOpen, color }) => {
    // Determining if on home page ("/") in order to not change margin styles (no scroll bar exists on homepage)
    let path = useLocation().pathname;
    

    return (
        <div 
            className="hamburger-menu-container" 
            // Added this to because on desktop, the menu is sliding to the right because the scroll bar disappears when the menu is open
            style={{ marginRight: menuOpen && !isMobile && path !== '/' ? '15px' : '0px'}}
        >
            <HamburgerMenu 
                className="hamburger-menu" 
                isOpen={menuOpen} 
                menuClicked={toggleMenu} 
                color={color} 
                width={21}
                height={14}    
            />
        </div>
    )
}

export default HamburgerMenuComponent
