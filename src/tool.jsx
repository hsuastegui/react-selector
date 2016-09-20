var React = require('react');
var ReactDOM = require('react-dom');
var Reflux = require('reflux');
var Selector = require('./components/selector.jsx');
var List = require('./components/list.jsx');
var Options = require('./options.js');

//Setup Redux Action
var statusUpdate = Reflux.createAction();

var Tool = React.createClass({
	getInitialState: function() {
    	return {
    		filters: {}
    	};
  	},
  	handleUserInput: function(data) {
	    this.setState({
	    	filters: data
	    });
  	},
	render:function(){
		return(
			<section>
				<Selector data={this.props.data} update={statusUpdate} onUserInput={this.handleUserInput} />
				<List url="products.json" update={statusUpdate} filter={this.state.filters} />
			</section>
		);
	}
});

ReactDOM.render(<Tool data={Options} />, document.getElementById('selector'));