import './Banner.css';

const Banner = ({ menuOpen }) => {

    return (
        <div className="banner-container">
            {!menuOpen && <h1 className="banner-text">Tyler Conti</h1>}
            
        </div>
    )
}

export default Banner
