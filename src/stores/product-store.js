import Reflux from 'reflux';
import Actions from '../actions';
import Api from '../utils/api';

export default Reflux.createStore({
	listenables: [Actions],
	getProducts: function(){
		return Api.get('products.json')
		.then(function(json){
			this.products = json;
			this.triggerChange();
		}.bind(this));
	},
	triggerChange: function(){
		this.trigger('product_load', this.products);
	}
});