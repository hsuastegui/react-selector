var React = require('react');
var Fetch = require('whatwg-fetch');
var Product = require('./product.jsx');
var root = 'http://react.dev/react/';

module.exports = React.createClass({
	getInitialState: function() {
		return {
			products: [],
			filters: {}
		};
	},
	loadProducts: function() {
		fetch(root + this.props.url, {

		})
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			this.setState({products: data});
		}.bind(this));
	},
	componentWillMount: function(){
		this.loadProducts();
	},
	componentDidMount: function() {
		//Listen for Redux Action Update
	    this.props.update.listen(function(data){
	    	//Update Internal State
	    	this.setState({filters: data});
	    }.bind(this));
	},
	render: function(){
		var filters = this.state.filters; //From Redux Action
		//var filters = this.props.filters; //From Parent State
		var size = Object.keys(filters).length;
		
		var productList = this.state.products.map(function(item){
			if(size > 0 ){
				//Filters
				var show = true;
				//Loop through active filters
				for(var key in filters) {
					//Get filter value
				    var filter = filters[key];
				    //Check if filter value matches product value
				    if(item[key] !== filter[0]){
				    	show = false;
				    }
				}
				if(show){
					return (
						<Product key={item.sku} item={item} />
					);
				}

			}else{
				//No filters
				return (
					<Product key={item.sku} item={item} />
				);
			}
		}.bind(this));
		return (
			<div className="row products">
				{productList}
			</div>
		);
	}
});