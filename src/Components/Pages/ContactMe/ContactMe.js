import { useState } from 'react';

import axios from 'axios';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './ContactMe.css';
import FormModals from '../../FormModals/FormModals';
import ENDPOINT from '../../../config/config';

const ContactMe = () => {
    const [loadingModalOpen, setLoadingModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: ENDPOINT,
            data: formData
        }).then(setLoadingModalOpen(true))
        .then(response => {
            if (response.data.status === 'success') {
                setLoadingModalOpen(false);
                setSuccessModalOpen(true);
            }
        }).catch(error => {
            setLoadingModalOpen(false);
            setFailedModalOpen(true);
        })
    }

    const handleFormChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // Success and Failed Modal State and function
    const [successModalOpen , setSuccessModalOpen] = useState(false);
    const [failedModalOpen , setFailedModalOpen] = useState(false);
    
    const closeModal = () => {
        setSuccessModalOpen(false)
        setFailedModalOpen(false)
    };

    return (
        <div className="contactMe">
            <h2 className="contactMe-header">Lets Get in Touch!</h2>
            <form className="contactMe-form" onSubmit={handleSubmit}>
                <div className="contactMe-form-group">
                    <label htmlFor="name" className="contactMe-label">Your Name</label>
                    <input 
                        type="text" 
                        className="contactMe-input" 
                        name="name" 
                        value={formData.name}
                        onChange={e => handleFormChange(e)}
                        required
                        placeholder="John Doe"
                    />
                </div>
                <div className="contactMe-form-group">
                    <label htmlFor="email" className="contactMe-label">Email</label>
                    <input 
                        type="email" 
                        className="contactMe-input" 
                        name="email" 
                        value={formData.email} 
                        onChange={e => handleFormChange(e)}
                        required
                        placeholder="JohnDoe@mail.com"
                    />    
                </div>
                <div className="contactMe-form-group">
                    <label htmlFor="message" className="contactMe-label">Message</label>
                    <textarea 
                        className="contactMe-input contactMe-message" 
                        name="message" 
                        rows="5" 
                        value={formData.message}
                        onChange={e => handleFormChange(e)}
                        required
                        placeholder="Your Message"
                        >
                    </textarea>    
                </div>
                <button type="submit" className="contactMe-submit">Submit</button>
            </form>
            {loadingModalOpen && <div className="contactMe-loader-container"><Loader type="BallTriangle" color="black" height={100} width={100} /></div>}
            
            
        
            {/* <Loader type="TailSpin" color="black" height={100} width={100} /> */}
            <FormModals successModalOpen={successModalOpen} failedModalOpen={failedModalOpen} closeModal={closeModal}/>
        </div>
    )
}

export default ContactMe
