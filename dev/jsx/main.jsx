var React = require('react');
var ReactDOM = require('react-dom');
var Weather = require('./components/Weather.jsx');

var color = {
    red: '#ec4444',
    orange: '#e68e4f',
    blue: '#357db5'
}

ReactDOM.render(<Weather mainColor={color.red} city="San Francisco, CA"/>, document.getElementById('weather'));
//ReactDOM.render(<Weather mainColor={color.blue} city="dnipropetrovsk"/>, document.getElementById('weather1'));
//ReactDOM.render(<Weather mainColor={color.orange} city="kiev"/>, document.getElementById('weather2'));

