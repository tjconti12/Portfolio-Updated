import { isMobile } from 'react-device-detect';

import HamburgerMenu from 'react-hamburger-menu';

import './HamburgerMenuComponent.css';

const HamburgerMenuComponent = ({ toggleMenu, menuOpen, color }) => {
    

    return (
        <div 
            className="hamburger-menu-container" 
            // Added this to because on desktop, the menu is sliding to the right because the scroll bar disappears when the menu is open
            style={{ marginRight: menuOpen && !isMobile ? '15px' : '0px'}}
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
