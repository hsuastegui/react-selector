var Reflux = require('reflux');
var Actions = require('../actions.jsx');
var Api = require('../utils/api.jsx');

module.exports = Reflux.createStore({
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