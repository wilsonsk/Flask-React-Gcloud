import React from 'react';
import PropTypes from 'prop-types';
import cn from './cn';

class App extends React.Component {
    constructor(props){
	super(props);
    }
    render() {
        return(
		<div className="flex h5 debug-grid">
			<h1 className="f4">{this.props.displayVar}</h1>
			<h1 className="f4">{this.props.displayVar}</h1>
			<h1 className="f4">{this.props.displayVar}</h1>
		</div>
        );
    }
}

const styles = {
	parent1: {
	},
	child1: {
	}
};

export default App;
