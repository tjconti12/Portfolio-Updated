import { useState } from 'react';
import copy from 'copy-to-clipboard';

import './FormModals.css';

const FormModals = ({ successModalOpen, failedModalOpen, closeModal }) => {
    const [copied, setCopied] = useState(false);
    

    const copyToClipboard = (e) => {
        copy(process.env.REACT_APP_EMAIL)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return (
        <div>
            {successModalOpen && 
            <div className="modal">
                <h2 className="modal-heading">Message Sent Successfully!</h2>
                <p className="modal-text">Thank you for reaching out. You should receive an automated response email to confirm that I received your message.</p>
                <p className="modal-text">(Check your spam/junk if it doesn't show up)</p>
                <button className="modal-button" onClick={closeModal}>Close</button>
            </div>
            }
            {failedModalOpen &&
                <div className="modal">
                <h2 className="modal-heading">Message Not Sent</h2>
                <p className="modal-text">I'm sorry, but there was a problem. Our end, not yours. Please feel free to send me an email!</p>
                {copied && <div className="modal-copy-success">Copied!</div>}
                <p className="modal-text modal-email" onClick={copyToClipboard} >{process.env.REACT_APP_EMAIL}</p>
                <p className="modal-text">(Click to Copy)</p>
                <button className="modal-button" onClick={closeModal}>Close</button>
            </div>
            }
        </div>
    )
}

export default FormModals
