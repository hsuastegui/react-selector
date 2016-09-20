var React = require('react');
var ReactDOM = require('react-dom');
var Selector = require('./components/selector.jsx');
var List = require('./components/list.jsx');
var Options = require('./options.js');
var FilterStore = require('./stores/filter-store.jsx');
var Actions = require('./actions.jsx');

var Tool = React.createClass({
	componentWillMount: function(){
		//Start product load
		Actions.getProducts();
		//Initialize filters
		FilterStore.initFilters();
	},
	render:function(){
		return(
			<section>
				<Selector options={Options} />
				<List url="products.json" />
			</section>
		);
	}
});

ReactDOM.render(<Tool />, document.getElementById('selector'));