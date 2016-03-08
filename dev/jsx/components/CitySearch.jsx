var React = require('react');

var CitySearch = React.createClass({

    handleSubmit: function(e){
        e.preventDefault();
        if (this.refs.searchInput.value.trim() && this.props.onNewSearch) {
            this.props.onNewSearch(this.refs.searchInput.value);
            this.refs.searchInput.value = '';
        }
    },


    render: function() {

        var placeholderVal = this.props.city || 'city name';

        return (
            <div className="city-search">
                <form onSubmit={this.handleSubmit} >
                    <input
                        type="text"
                        className="city-search-input"
                        ref="searchInput"
                        placeholder={placeholderVal}/>
                    <button className="fa-stack fa-lg city-search-button" >
                        <i className="fa fa-search"></i>
                    </button >
                </form>
            </div>
        )
    }
});

module.exports = CitySearch;
