import backgroundImage from '../../resources/images/backgroundHorizontal.jpg';
import logo from '../../resources/images/LogoWhite.png';

import './Banner.css';

const Banner = ({ menuOpen }) => {
    

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
        </div>
    )
}

export default Banner
