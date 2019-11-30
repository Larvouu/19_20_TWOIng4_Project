import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import '../ProgressBar/ProgressBar.css';

class ProgressBar extends Component {
    render() {
        return (
            <div>
                <br/>
                <div id="text" style={{ fontSize: "0.8em" }}>Salut</div>
                <br/>
                
                <Progress color="info" value="25" />
                <div id="value" style={{ fontSize: "1.4em" }}>25%</div>
            </div>
        );
    }
}

export default ProgressBar;