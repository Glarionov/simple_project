import React from 'react';
import ReactDOM from 'react-dom';

function Main() {
    return (
        <div className="container">
            Now I am reactive!
        </div>
    );
}

export default Main;

if (document.getElementById('main-wrapper')) {
    ReactDOM.render(<Main />, document.getElementById('main-wrapper'));
}
