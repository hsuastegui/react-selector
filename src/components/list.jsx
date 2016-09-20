var React = require('react');
var Reflux = require('reflux');
var Product = require('./product.jsx');
var ProductStore = require('../stores/product-store.jsx');
var FilterStore = require('../stores/filter-store.jsx');
var _filter = require('lodash.filter');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(ProductStore, 'onProductLoad'),
    	Reflux.listenTo(FilterStore, 'onFilterUpdate')
	],
	getInitialState: function() {
		return {
			products: [],
			filters: {}
		};
	},
	render: function(){
		//From Redux Action
		var filters = this.state.filters;
		
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
	onProductLoad: function(event, products){
		this.setState({products: products});
	},
	onFilterUpdate: function(event){
		this.setState({filters: FilterStore.filters});
	}
});