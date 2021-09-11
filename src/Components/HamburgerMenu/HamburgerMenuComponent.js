

import HamburgerMenu from 'react-hamburger-menu';

import './HamburgerMenuComponent.css';

const HamburgerMenuComponent = ({ toggleMenu, menuOpen, color }) => {
    

    return (
        <div className="hamburger-menu-container">
            <HamburgerMenu className="hamburger-menu" isOpen={menuOpen} menuClicked={toggleMenu} color={color} />
        </div>
    )
}

export default HamburgerMenuComponent
