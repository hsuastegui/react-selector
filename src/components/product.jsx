var React = require('react');
module.exports = React.createClass({
	render: function(){
		return (
			<div className="column medium-4">
				<h3>{this.props.item.name}</h3>
				<p>{this.props.item.sku}</p>
				<p>{this.props.item.price}</p>
				<p>{this.props.item.tension}</p>
				<p>{this.props.item.support}</p>
				<ul>
					<li>{this.props.item.option.hypo_allergenic ? 'Hypo Allergenic' : ''}</li>
					<li>{this.props.item.option.temperature_regulating ? 'Temperature Regulating' : ''}</li>
					<li>{this.props.item.option.chemical_free ? 'Chemical Free' : ''}</li>
					<li>{this.props.item.option.no_turn ? 'No Turn' : ''}</li>
				</ul>
				<ul>
					<li>{this.props.item.spring.hand_teased ? 'Hand Teased' : ''}</li>
					<li>{this.props.item.spring.hand_tied_springs ? 'Hand Tied' : ''}</li>
					<li>{this.props.item.spring.anti_roll_binary_springs ? 'Anti-roll' : ''}</li>
				</ul>
			</div>
		);
	}
});