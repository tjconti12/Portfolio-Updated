import backgroundImage from '../../resources/images/backgroundHorizontal.jpg';
// import backgroundImage from '../../resources/images/backgroundVertical.jpg';

import './Banner.css';

const Banner = ({ menuOpen }) => {

    return (
        <div className="banner-container">
            {!menuOpen && <h1 className="banner-text">Tyler Conti</h1>}
            <div className="banner-background-container">
                <img className="banner-background-image" src={backgroundImage} alt="background of clouds in the sky with a filter" />
            </div>
        </div>
    )
}

export default Banner
