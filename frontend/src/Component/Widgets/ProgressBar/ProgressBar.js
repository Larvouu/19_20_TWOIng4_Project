import React, { Component } from 'react';
import { Progress } from 'reactstrap';

class ProgressBar extends Component {
    render() {
        return (
            <div>
                <br/>
                <div className="text-center">Salut</div>
                <br/>
                
                <Progress color="success" value="25" />
                <div className="text-center">25%</div>
            </div>
        );
    }
}

export default ProgressBar;