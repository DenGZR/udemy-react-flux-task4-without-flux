var React = require('react');
var Forecast = require('./Forecast.jsx');

var FutureWeatherBox = React.createClass({

    render: function() {

        var weatherlist;
        weatherlist = this.props.weatherlist;

        return (
            <div className="weather-next-day" >
                <table className="table table-striped">
                    <Forecast list={weatherlist} cntDay="6"/>
                </table>
            </div>


        );
    }
});

module.exports = FutureWeatherBox;