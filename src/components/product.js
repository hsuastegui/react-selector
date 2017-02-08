import React from 'react';
const Product = (props) => {
	return (
		<div className="column medium-4">
			<h3>{props.item.name}</h3>
			<p>{props.item.sku}</p>
			<p>{props.item.price}</p>
			<p>{props.item.tension}</p>
			<p>{props.item.support}</p>
			<ul>
				<li>{props.item.hypo_allergenic ? 'Hypo Allergenic' : ''}</li>
				<li>{props.item.temperature_regulating ? 'Temperature Regulating' : ''}</li>
				<li>{props.item.chemical_free ? 'Chemical Free' : ''}</li>
				<li>{props.item.no_turn ? 'No Turn' : ''}</li>
			</ul>
			<ul>
				<li>{props.item.hand_teased ? 'Hand Teased' : ''}</li>
				<li>{props.item.hand_tied_springs ? 'Hand Tied' : ''}</li>
				<li>{props.item.anti_roll_binary_springs ? 'Anti-roll' : ''}</li>
			</ul>
		</div>
	);
};
export default Product;