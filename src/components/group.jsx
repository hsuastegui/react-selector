var React = require('react');
var Input = require('./input.jsx');

module.exports = React.createClass({
	getInitialState: function(){
		return { show: true };
	},
	render: function(){
		var groupName = this.props.name;
		var inputs = this.props.fields.map(function(input, index){
	      return <Input key={input.id} name={groupName} {...input} />
	    });
	    
		return (
	      <div className={this.state.show ? 'row section visible' : 'row section'}>
	      	<div className="title columns small-12">
		        <h2>{this.props.title}</h2>
		        <button type="button" className="button more-info">More Info</button>
	        </div>
	        <fieldset className="columns small-12">
	        	{inputs}
	        </fieldset>
	      </div>
	    );
	}
});