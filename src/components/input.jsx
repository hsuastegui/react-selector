var React = require('react');
var Actions = require('../actions.jsx');

module.exports = React.createClass({
	handleInputChange: function(e){
		Actions.updateFilters({
			filter: e.target.dataset.filter,
			value: e.target.value,
			type: e.target.type,
			checked: e.target.checked
		});
	},
	render: function(){
		return (
			<span>
				<input 
					onChange={this.handleInputChange}
					id={this.props.id}
					type={this.props.type}
					value={this.props.text}
					name={this.props.name}
					data-filter={this.props.filter}
					className={this.props.type === 'radio' ? 'with-gap' : 'filled-in'}
				/>
				<label htmlFor={this.props.id}>{this.props.text}</label>
			</span>
		);
	}
});