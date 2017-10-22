import React from 'react';
import Display from './Diplay';

import PropTypes from 'prop-types';

class App extends React.Component {
    static propTypes = {
      displayMe: PropTypes.string
    };
    
    constructor(props) {
        super(props);
        
        this.state = {
            displayMe: this.props.displayVar
        };
        
    }
    
    render() {
        return(
            <div className="container">
                <Display displayMessage={this.state.diplayMe} />
            </div>
        );
    }
}

export default App;
