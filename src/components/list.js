import React from 'react';
import Reflux from 'reflux';
import _filter from 'lodash.filter';
import Product from './product';
import ProductStore from '../stores/product-store';
import FilterStore from '../stores/filter-store';

//Legacy component
const List = React.createClass({
	mixins: [
		Reflux.listenTo(ProductStore, 'onProductLoad'),
    	Reflux.listenTo(FilterStore, 'onFilterUpdate')
	],
	getInitialState: function() {
		return {
			products: [],
			filters: {}
		}
	},
	onProductLoad: function(event, products){
		this.setState({products: products});
	},
	onFilterUpdate: function(event){
		this.setState({filters: FilterStore.filters});
	},
	renderProducts: function(filters){
		let products = this.state.products;

		//Apply filters
		if(Object.keys(filters).length > 0){
			products = _filter(this.state.products, filters);
		}
		
		return products.map(function(item){
			return <Product key={item.sku} item={item} />
		});
	},
	render: function(){
		//From Redux Action
		const filters = this.state.filters;
		
		return (
			<div className="row products">
				{this.renderProducts(filters)}
			</div>
		);
	}
});
export default List;