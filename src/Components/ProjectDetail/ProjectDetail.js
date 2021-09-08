import './ProjectDetail.css';

const ProjectDetail = () => {
    return (
        <div>
            <h2>Travlr</h2>
            <h4>Yelp style full stack web application where users can retrieve and add entries of local food and drinks in the NYC area</h4>
            
            <h3>Motivation</h3>
            <p>This page was inspired by the popular search sites such as yelp and foursquare. This was a group collaboration, and the group wanted to create a clean and useful alternative to the other popular food/drink sites.</p>
            
            <h3>Build Status</h3>
            <p>The application is fully functional for food and drink categories. Future plans would include other categories, a way for users to update existing entries, and user authentication. We also would like the add a rating system for each of the entries.</p>

            <h3>Tech/Framework Used</h3>
            <p>React, css, and REST APIs for front end, python and django for back end.</p>

            <h3>Features</h3>
            <p>The ability to add new entries to the database, with selectable tags for each place. When a user inputs an address into the new entry form, the address is run through a geocoder that returns the longitude and latitude before storing to the database. This allows the new location to appear at the correct spot on the map.</p>

            <div>
                <button>View Code</button>
                <button>Live Application</button>
            </div>

        </div>
    )
}

export default ProjectDetail
