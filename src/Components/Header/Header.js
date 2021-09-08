

import './Header.css';

const Header = ({ menuOpen }) => {

    return (
        <div className="banner-container">
            {!menuOpen && <h1 className="banner-text">Tyler Conti</h1>}
            
        </div>
    )
}

export default Header
