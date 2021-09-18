import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import logo from '../../resources/images/LogoBlack.png';
import backArrow from '../../resources/images/Arrowhead.png';

import './Header.css';

const Header = ({ title }) => {

    const history = useHistory();

    const goBack = () => history.goBack();

    // Dynamic path for the header
    // Allows user to return to the page that is being displayed by the header
    // splitting and joining to remove the space (example: /About Me changes to /AboutMe)
    const path = title.split(' ').join('');

    return (
        <div className="gray-line-container">
            <div className="header-logo-container">
                <Link to="/"><img className="header-logo" src={logo} alt="Tyler Conti Logo" /></Link>
            </div>
            <div className="gray-line"></div>
            <Link className="link" to={`/${path}`}><h1 className="logo">{title}</h1></Link>
            {/* <div className="back-button" onClick={goBack}>&#8249;</div> */}
            <div className="back-button-container">
                <img className="back-button" onClick={goBack} src={backArrow} alt="back arrow" />
            </div>
            <div className="gray-line"></div>
        </div>
    )
}

export default Header
