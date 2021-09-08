import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <ul className="menu-list-main">
                <li className="list-item-main">About Me</li>
                <li className="list-item-main">Projects</li>
                <ul className="menu-list-secondary">
                    <li className="list-item-secondary">Project 1</li>
                    <li className="list-item-secondary">Project 2</li>
                    <li className="list-item-secondary">Project 3</li>
                    <li className="list-item-secondary">Project 4</li>
                    <li className="list-item-secondary">Project 5</li>
                    <li className="list-item-secondary">Project 6</li>
                    <li className="list-item-secondary">Project 7</li>
                </ul>
                <li className="list-item-main">Contact Me</li>
            </ul>
        </div>
    )
}

export default Menu
