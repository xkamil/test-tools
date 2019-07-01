import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import RandomContainer from "./pages/random/RandomContainer";
import EncodeDecodeContainer from "./pages/encodedecode/EncodeDecodeContainer";
import NavigationView from "./components/Navigation";
import TransformContainer from "./pages/transform/TransformContainer";
import Store from "./redux/Store";
import {createStore} from 'redux';
import reducers from "./redux/reducers/reducers";
import {Provider} from "react-redux";
import NotificationContainer from "./components/NotificationContainer";

const store = createStore(reducers);
Store.init(store);

const links = [
    {path: "/random", label: "Random", component: RandomContainer},
    {path: "/encodedecode", label: "Encode/Decode", component: EncodeDecodeContainer},
    {path: "/transform", label: "Transform", component: TransformContainer},
];

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <NavigationView links={links}/>
                    {links.map(link => <Route key={link.path} exact path={link.path} component={link.component}/>)}
                </Router>

                <NotificationContainer/>
            </div>
        </Provider>
    );
}

export default App;
