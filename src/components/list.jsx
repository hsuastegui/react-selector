var React = require('react');
var Reflux = require('reflux');
var Product = require('./product.jsx');
var ProductStore = require('../stores/product-store.jsx');
var Actions = require('../actions.jsx');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(ProductStore, 'onStoreChange')
	],
	getInitialState: function() {
		return {
			products: [],
			filters: {}
		};
	},
	componentWillMount: function(){
		//ProductStore.getProducts();
		Actions.getProducts();
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
		
		return (
			<div className="row products">
				{this.renderProducts(filters, size)}
			</div>
		);
	},
	renderProducts: function(filters, size){
		return this.state.products.map(function(item){
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
	},
	onStoreChange: function(event, products){
		this.setState({
			products: products
		});
	}
});