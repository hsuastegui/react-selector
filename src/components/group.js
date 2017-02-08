import React from 'react';
import Input from './input';

class Group extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			show: true
		};
	}
	render(){
		const groupName = this.props.name;
		const inputs = this.props.fields.map(function(input, index){
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
}
export default Group;