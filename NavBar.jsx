var React = require('react');

var NavBar = React.createClass({
    render: function () {
        var pages = ['home', 'blog', 'bio', 'projects', 'contact'];
        var navLinks = pages.map(function(page, i){
            return (
                <a href={'/' + page} key={'menu_' + i}>
                    {page + ' '}
                </a>
            );
        });

        return <nav>{navLinks}</nav>;
    }
});

module.exports = NavBar;