// import linkedin from '../../../resources/images/linkedin.png';
// import medium from '../../../resources/images/Medium.png';
// import github from '../../../resources/images/github.png';

import './ContactMe.css';

const ContactMe = () => {
    return (
        <div className="contactMe">
            <h2 className="contactMe-header">Lets Get in Touch!</h2>
            <form className="contactMe-form">
                <div className="contactMe-form-group">
                    <label htmlFor="name" className="contactMe-label">Your Name</label>
                    <input type="text" className="contactMe-input" name="name" required/>
                </div>
                <div className="contactMe-form-group">
                    <label htmlFor="email" className="contactMe-label">Email</label>
                    <input type="email" className="contactMe-input" name="email" required/>    
                </div>
                <div className="contactMe-form-group">
                    <label htmlFor="message" className="contactMe-label">Message</label>
                    <textarea className="contactMe-input contactMe-message" name="message" rows="5" required></textarea>    
                </div>
                <button type="submit" className="contactMe-submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactMe
