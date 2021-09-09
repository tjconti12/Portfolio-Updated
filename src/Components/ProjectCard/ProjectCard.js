import placeHolderImg from '../../resources/images/placeholder-image.png';

import './ProjectCard.css';

const ProjectCard = ({ title, displayPhoto }) => {
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img className="card-image" src={displayPhoto ? displayPhoto.url : placeHolderImg} alt="place holder"/>
            </div>
            <h2 className="card-title">{title || 'Project Title'}</h2>
        </div>
    )
}

export default ProjectCard