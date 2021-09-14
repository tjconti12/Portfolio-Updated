import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import './Header.css';

const Header = ({ title }) => {

    const history = useHistory();

    const goBack = () => history.goBack();


    return (
        <div className="gray-line-container">
            <div className="gray-line"></div>
            <Link className="link" to="/"><h1 className="logo">{title}</h1></Link>
            <div className="gray-line"></div>
            <button className="back-button" onClick={goBack}>Back</button>
        </div>
    )
}

export default Header
