var React = require('react');
var CitySearch = require('./CitySearch.jsx');
var ToDayDate = require('./ToDayDate.jsx');
var WeatherToDay = require('./WeatherToDay.jsx');
var WeatherNextDay = require('./WeatherNextDay.jsx');
var HTTP = require('../services/httpservice');


var Weather = React.createClass({

    getInitialState: function(){
        return {
            dataForecast: {
                city: {
                    id: 0,
                    name: "",
                    coord: {
                        lon: 0,
                        lat: 0
                    },
                    country: "",
                    population: 0,
                    sys: {
                        population: 0
                    }
                },
                cod: "200",
                message: 0.009,
                cnt: 5,
                list: [
                    {
                        dt: 1456304400,
                        temp: {
                            day: 273.15,
                            min: 279.15,
                            max: 281.97,
                            night: 281.15,
                            eve: 281.61,
                            morn: 279.15
                        },
                        pressure: 1007.34,
                        humidity: 99,
                        weather: [
                            {
                                id: 501,
                                main: "Rain",
                                description: "moderate rain",
                                icon: "10d"
                            }
                        ],
                        speed: 0,
                        deg: 0,
                        clouds: 92,
                        rain: 7.8
                    }
                ]
            }
        }
    },

    doSearch: function(nameCity){
        console.log(nameCity);
        HTTP.get(nameCity)
            .then(function(data){
                this.setState({dataForecast: data});
            }.bind(this));
    },

    componentDidMount: function() {
        var cityName = this.props.city;
        this.doSearch(cityName);
    },

    render: function() {

        var   baseStyle;

        baseStyle = {
            weatherMain:{
                background :  this.props.mainColor
            }
        };

        return (
            <div className="weather-container">
                <div className="weather-main" style={baseStyle.weatherMain}>
                    <CitySearch city={this.state.dataForecast.city.name} onNewSearch={this.doSearch}></CitySearch>
                    <ToDayDate></ToDayDate>
                    <WeatherToDay weatherlist={this.state.dataForecast.list}></WeatherToDay>
                </div>
                <WeatherNextDay weatherlist={this.state.dataForecast.list}></WeatherNextDay>
            </div>
        );
    }
});

module.exports = Weather;