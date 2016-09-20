var React = require('react');
var Group = require('./group.jsx');

module.exports = React.createClass({
	getInitialState: function() {
    	return {
    		data: this.props.data,
    		filters: {}
    	};
  	},
  	handleFilterChange: function(data){
  		//Get Filters State
  		var filters = this.state.filters;

	 	if(data.type === 'radio'){
	 		//Add/replace filter
			filters[data.filter] = data.value;

		}else if(data.type === 'checkbox'){
			if(data.checked){
				//Add filter
				filters[data.filter] = data.checked;

			}else{
				//Remove filter
				delete filters[data.filter];

			}
		}
  		//Pass Filters back to Parent
  		this.props.onUserInput(filters);
  	 	//Trigger Redux Action Update
  		this.props.update(filters);
  		//Update Internal Filters State
  		this.setState({filters: filters});
  	},
	render: function(){
		var handler = this.handleFilterChange;
	    var groups = this.props.data.map(function(group){
	      return (
	      	<Group onFilterChange={handler} title={group.title} name={group.name} key={group.id} fields={group.content} />
	      );
	    });
		return (
	      <div className="selector">
	        {groups}
	      </div>
	    );
	}
});