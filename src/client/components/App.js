import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import RandomContainer from "./random/RandomContainer";
import EncodeDecodeContainer from "./encodedecode/EncodeDecodeContainer";
import NavigationView from "./Navigation";

const links = [
    {path: "/random", label: "Random", component: RandomContainer},
    {path: "/encodedecode", label: "Encode/Decode", component: EncodeDecodeContainer}
];

function App() {
    return (
        <div className="App">
            <Router>
                <NavigationView links={links}/>
                {links.map(link => <Route key={link.path} exact path={link.path} component={link.component}/>)}
            </Router>
        </div>
    );
}

export default App;
