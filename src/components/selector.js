import React from 'react';
import Group from './group';

const Selector = (props) => {
    function groups(){
    	return props.options.map(function(group){
      		return <Group key={group.id} {...group} />
    	});
    }
	return (
      <div className="selector">
        {groups()}
      </div>
    );
};
export default Selector;