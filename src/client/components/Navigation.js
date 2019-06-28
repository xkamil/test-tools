import React from 'react';
import {Link, Route} from "react-router-dom";


function NavigationView(props) {
    const {links} = props;

    const menuLink = (path, label) => <li key={path} className="nav-item"><Link to={path} className="nav-link">{label}</Link></li>;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    {links.map(link => menuLink(link.path, link.label))}
                </ul>
            </div>
        </nav>
    )
}

export default NavigationView;
