import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import './Header.css';

const Header = () => {

    const history = useHistory();

    const goBack = () => history.goBack();


    return (
        <div className="gray-line-container">
            <div className="gray-line"></div>
            <Link className="link" to="/"><h1 className="logo">Tyler Conti</h1></Link>
            <div className="gray-line"></div>
            <button className="back-button" onClick={goBack}>Back</button>
        </div>
    )
}

export default Header
