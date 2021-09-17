import { Link } from 'react-router-dom';

import linkedin from '../../resources/images/linkedin.png';
import medium from '../../resources/images/Medium.png';
import github from '../../resources/images/github.png';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <h4 className="footer-more-info">For more information, you can find my accounts below</h4>
                <div className="footer-connection-logos-container">
                    <div className="footer-logo-container">
                        <a className="footer-link" href="https://www.linkedin.com/in/tylerjconti/" target="_blank" rel="noopener noreferrer"><img className="connect-logo" src={linkedin} alt="linkedin logo" /></a>
                    </div>
                    <div className="footer-logo-container-medium">
                        <a className="footer-link" href="https://tjconti12.medium.com/" target="_blank" rel="noopener noreferrer"><img className="connect-logo" src={medium} alt="medium logo" /></a>
                    </div>
                    <div className="footer-logo-container">
                        <a className="footer-link" href="https://github.com/tjconti12/" target="_blank" rel="noopener noreferrer"><img className="connect-logo" src={github} alt="github logo" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <Link to="/" className="footer-link"><h4 className="footer-name">&copy; Tyler Conti <span className="footer-after-name">|</span> Portfolio</h4></Link>
            </div>
        </div>
    )
}

export default Footer
