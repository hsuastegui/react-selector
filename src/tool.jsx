var React = require('react');
var ReactDOM = require('react-dom');
var Reflux = require('reflux');
var Selector = require('./components/selector.jsx');
var List = require('./components/list.jsx');

//Setup Redux Action
var statusUpdate = Reflux.createAction();

var Tool = React.createClass({
	getInitialState: function() {
    	return {
    		filters: {}
    	};
  	},
  	handleUserInput: function(data) {
	    this.setState({
	    	filters: data
	    });
  	},
	render:function(){
		return(
			<div>
				<Selector data={this.props.data} update={statusUpdate} onUserInput={this.handleUserInput} />
				<List url="products.json" update={statusUpdate} filter={this.state.filters} />
			</div>
		);
	}
});

var options = [
	{id: 1, title:"Tension", name:"tension", content:[
		{id:11, text: "Soft", type: "radio"},
		{id:12, text: "Medium", type: "radio"},
		{id:13, text: "Firm", type: "radio"}
	]},
	{id: 2, title:"Type of Support", name:"support", content:[
		{id: 21, text: "Pocket Sprung", type: "radio"},
		{id: 22, text: "Responsive Latex", type: "radio"},
		{id: 23, text: "Pocket Sprung & Memory Foam", type: "radio"},
		{id: 24, text: "Pocket Sprung & Reponsive Latex", type: "radio"},
	]},
	{id: 3, title:"Other Options", name:"option", content:[
		{id: 31, text: "Hypo-allergenic", type: "checkbox"},
		{id: 32, text: "Temperature Regulating", type: "checkbox"},
		{id: 33, text: "Chemical Free", type: "checkbox"},
		{id: 34, text: "No Turn", type: "checkbox"},
	]},
	{id: 4, title:"Spring Options", name:"spring", content:[
		{id: 41, text: "Hand Teased", type: "checkbox"},
		{id: 42, text: "Hand Tied Springs", type: "checkbox"},
		{id: 43, text: "Anti-roll Binary Springs", type: "checkbox"},
	]}
];
ReactDOM.render(<Tool data={options} />, document.getElementById('selector'));