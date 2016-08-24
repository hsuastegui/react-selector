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
  		var filter = this.state.filters;

  		if(!(data.name in filter)){
 			//Filter type hasn't been added, push initial value
  			filter[data.name] = [data.filter];

  		}else{
  			//Filter type already exists
  			if(data.type === 'radio'){
  				//Only 1 option allow therefore substitute the value
				filter[data.name] = [data.filter];
			}else{
				//Multiple options allowed, push options
				var array = filter[data.name];
				if(data.checked){
					//Add option
					array.push(data.filter);
					filter[data.name] = array;
					
				}else{
					//Remove option
					var index = array.indexOf(data.filter);
					if (index > -1) {
					    var newArray = array.filter(function(value){
					    	return value !== data.filter;
					    });
					    filter[data.name] = newArray;
					}
				}

			}
  		}
  		//Pass Filter back to Parent
  		this.props.onUserInput(filter);
  	 	//Trigger Redux Action Update
  		this.props.update(filter);
  		//Update Internal Filters State
  		this.setState({filters: filter});
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