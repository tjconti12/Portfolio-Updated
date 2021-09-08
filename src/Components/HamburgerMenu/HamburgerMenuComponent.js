

import HamburgerMenu from 'react-hamburger-menu';

import './HamburgerMenuComponent.css';

const HamburgerMenuComponent = ({ toggleMenu, menuOpen }) => {
    

    return (
        <div className="hamburger-menu-container">
            <HamburgerMenu className="hamburger-menu" isOpen={menuOpen} menuClicked={toggleMenu} color="#FFFFFF" />
        </div>
    )
}

export default HamburgerMenuComponent
