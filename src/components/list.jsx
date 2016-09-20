var React = require('react');
var Reflux = require('reflux');
var Product = require('./product.jsx');
var ProductStore = require('../stores/product-store.jsx');
var Actions = require('../actions.jsx');
var _filter = require('lodash.filter');

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
		
		return (
			<div className="row products">
				{this.renderProducts(filters)}
			</div>
		);
	},
	renderProducts: function(filters){
		var products = this.state.products;

		//Apply filters
		if(Object.keys(filters).length > 0){
			products = _filter(this.state.products, filters);
		}
		
		return products.map(function(item){
			return <Product key={item.sku} item={item} />
		});
	},
	onStoreChange: function(event, products){
		this.setState({
			products: products
		});
	}
});