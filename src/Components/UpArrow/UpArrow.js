import smoothscroll from 'smoothscroll-polyfill';

import arrow from '../../resources/images/Arrowhead.png'

import './UpArrow.css';

const UpArrow = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        // This adds smooth scrolling effect when on safari (most IOS devices)
        smoothscroll.polyfill();
    }

    return (
        <div className="up-arrow-container">
            <img className="up-arrow" src={arrow} alt="up arrow to navigate to top of page" onClick={scrollToTop}/>
        </div>
    )
}

export default UpArrow
