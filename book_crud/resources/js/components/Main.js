import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './NotFound';
import AllBooks from './AllBooks';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Main() {
    return (
        <div className="main-content">
            <Router>
                <Switch>
                    <Route path="/all_books" component={AllBooks}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    );
}

if (document.getElementById('main-wrapper')) {
    ReactDOM.render(<Main/>, document.getElementById('main-wrapper'));
}
