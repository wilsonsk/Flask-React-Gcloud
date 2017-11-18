import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props){
	super(props);
    }

    render() {
        return(
		<div className="debug-grid">
			<h1 className="f1">{this.props.displayVar}</h1>
		</div>
        );
    }
}

export default App;
