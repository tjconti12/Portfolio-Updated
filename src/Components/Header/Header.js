import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import './Header.css';

const Header = ({ title }) => {

    const history = useHistory();

    const goBack = () => history.goBack();

    // Dynamic path for the header
    // Allows user to return to the page that is being displayed by the header
    // splitting and joining to remove the space (example: /About Me changes to /AboutMe)
    const path = title.split(' ').join('');

    return (
        <div className="gray-line-container">
            <div className="gray-line"></div>
            <Link className="link" to={`/${path}`}><h1 className="logo">{title}</h1></Link>
            <div className="back-button" onClick={goBack}>&#8249;</div>
            <div className="gray-line"></div>
        </div>
    )
}

export default Header
