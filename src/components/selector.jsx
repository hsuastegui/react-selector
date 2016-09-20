var React = require('react');
var Group = require('./group.jsx');

module.exports = React.createClass({
	render: function(){
	    var groups = this.props.options.map(function(group){
	      return <Group key={group.id} {...group} />
	    });

		return (
	      <div className="selector">
	        {groups}
	      </div>
	    );
	}
});