import ReactGA from 'react-ga';
import * as projectData from '../../resources/projects.json';
import ReactPlayer from 'react-player';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ProjectDetail.css';
import UpArrow from '../UpArrow/UpArrow';

const ProjectDetail = ({ props }) => {
    // Getting the url parameter to query the correct data
    let fullPath = useLocation();
    // useLocation returns an object so I need the pathname property. This would be /projects/name
    // Then spliting it returns an array of ['/', 'projects', 'name']
    let path = fullPath.pathname.split('/')
    //  So I grab the third item
    let projectName = path[2]

    // Searching the data for the correct project based on its title
    let currentProject = projectData.default.find(obj => obj.title === projectName);

    // Google Analytics for each link click
    const handleRepoClick = () => {
        ReactGA.event({
            category: "Links",
            action: "Github",
            label: `${currentProject.title} code viewed`,
            value: 1
        })
      }

    const handleLiveSiteClick = () => {
        ReactGA.event({
            category: "Links",
            action: "Live App",
            label: `${currentProject.title} live app viewed`,
            value: 1
        })
    }

    return (
        <div className="project-detail-container">
            <div className="project-column-container">
                <div className="project-right-column">
                    <h2 className="project-title">{currentProject.title}</h2>
                    <h4 className="project-description">{currentProject.description}</h4>
                    
                    <h3 className="project-h3">Motivation</h3>
                    <p className="project-p">{currentProject.motivation}</p>
                    
                    <h3 className="project-h3">Build Status</h3>
                    <p className="project-p">{currentProject.buildStatus}</p>

                    <h3 className="project-h3">Tech/Framework Used</h3>
                    <p className="project-p">{currentProject.tech}</p>

                    <h3 className="project-h3">Features</h3>
                    <p className="project-p">{currentProject.features}</p>
                    {
                        currentProject.tags &&
                        <div>
                        <h3 className="project-h3">Tags</h3>
                        {currentProject.tags.map(tag => <button className="project-tag">{tag}</button>)}
                        </div>
                    }
                    

                </div>
                
                <div className="project-left-column">
                    <div className="project-button-container">
                        <a className="project-button" href={currentProject.repo} target="_blank" rel="noopener noreferrer" onClick={handleRepoClick}>View Code</a>
                        { currentProject.gameDownload ? 
                        <a className="project-button" href={currentProject.gameDownload} target="_blank" rel="noopener noreferrer" onClick={handleLiveSiteClick}>Download Game</a>
                        : <a className="project-button" href={currentProject.url} target="_blank" rel="noopener noreferrer" onClick={handleLiveSiteClick}>Live Application</a>}
                    </div>
                    <div className="project-highlight-images">
                       {currentProject.laptop && 
                            <div className="project-laptop-image-container" >
                                <img className="project-laptop-image" src={currentProject.laptop} alt="Project Home Page on Desktop" />
                            </div> 
                        }
                        {currentProject.phone &&
                            <div className="project-phone-image-container">
                                <img className="project-phone-image" src={currentProject.phone} alt="Project Home Page on Mobile" />
                            </div>
                        }
                        {currentProject.video && 
                            <div className="project-laptop-image-container" >
                                <ReactPlayer 
                                    url={currentProject.video}
                                />
                            </div> 
                        }

                    </div>
                </div>
            </div>
            
            <div className="project-images-container">
                {currentProject.photos.map(photo => {
                    return (
                        <div className="project-photo-container" >
                            <img src={photo.url} alt={photo.legend} className="project-photo" />
                        </div>
                    )
                })}
            </div>
            <UpArrow />
        </div>
    )
}

export default ProjectDetail
