var React = require('react');
var NavBar = require('./NavBar.jsx');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar />
                <h1>Profile page</h1>
                <p>Currently I'm mastering ReactJS, exactly how components render other components. And, No, I'm not Doctor Strange.</p>
                <img src="http://wallpapersinsider.com/wp-content/uploads/2016/04/Doctor-Strange-2016-Wallpapers.jpg" />
            </div>
        );
    }
});

module.exports = App;