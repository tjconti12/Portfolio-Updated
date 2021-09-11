import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div className="gray-line-container">
            <div className="gray-line"></div>
            <Link className="link" to="/"><h1 className="logo">Tyler Conti</h1></Link>
            <div className="gray-line"></div>
        </div>
    )
}

export default Header
