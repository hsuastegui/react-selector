//React
import React from 'react';
import ReactDOM from 'react-dom';

//Reflux
import FilterStore from './stores/filter-store';
import Actions from './actions';

//Components
import Selector from './components/selector';
import List from './components/list';
import Options from './options';

//Stylesheets
import './styles/styles.scss';

class Tool extends React.Component {
	componentDidMount(){
		//Start product load
		Actions.getProducts();
		//Initialize filters
		FilterStore.initFilters();
	}
	render(){
		return(
			<section>
			    <h1>Build your Mattress</h1>
      			<p>Please choose your options:</p>
				<p>We have <strong>X</strong> product(s) based on your selection</p>
				<Selector options={Options} />
				<List />
			</section>
		);
	}
}

ReactDOM.render(<Tool />, document.getElementById('selector'));
