var React = require('react');
module.exports = React.createClass({
	handleInputChange: function(e){
		this.props.onInputChange({
			name: e.target.name,
			filter: e.target.value,
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
					className={this.props.type === 'radio' ? 'with-gap' : 'filled-in'}
				/>
				<label htmlFor={this.props.id}>{this.props.text}</label>
			</span>
		);
	}
});