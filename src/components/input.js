import React from 'react';
import Actions from '../actions';

const Input = (props) => {
	function handleInputChange(e){
		Actions.updateFilters({
			filter: e.target.dataset.filter,
			value: e.target.value,
			type: e.target.type,
			checked: e.target.checked
		});
	}
	return (
		<span>
			<input 
				onChange={handleInputChange}
				id={props.id}
				type={props.type}
				value={props.text}
				name={props.name}
				data-filter={props.filter}
				className={props.type === 'radio' ? 'with-gap' : 'filled-in'}
			/>
			<label htmlFor={props.id}>{props.text}</label>
		</span>
	);
}
export default Input;