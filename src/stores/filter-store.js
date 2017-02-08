import Reflux from 'reflux';
import Actions from '../actions';

export default Reflux.createStore({
	listenables: [Actions],
	initFilters: function(){
		this.filters = {};
	},
	updateFilters: function(data){
		//Process input change
	 	if(data.type === 'radio'){
	 		//Add/replace filter
			this.filters[data.filter] = data.value;

		}else if(data.type === 'checkbox'){
			if(data.checked){
				//Add filter
				this.filters[data.filter] = data.checked;

			}else{
				//Remove filter
				delete this.filters[data.filter];

			}
		}
		//Trigger change
		this.triggerChange();
	},
	triggerChange: function(){
		this.trigger('filter_update');
	}
});