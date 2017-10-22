import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: this.props.displayMessage
        };
    }
    
    render() {
        return(
            <div id="display">
                <textarea rows="20" cols="150" className="text-display" value={this.state.data} readOnly/>
            </div>
        )
    }
}

export default Display;
