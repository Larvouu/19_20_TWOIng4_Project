import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import '../ProgressBar/ProgressBar.css';

class ProgressBar extends Component {
    render() {
        return (
            <div>
                <br/>
                <div id="text" style={{ fontSize: "0.8em" }}>{this.props.progressBar_title}</div>
                <br/>
                
                <Progress color="info" value={(this.props.tmp_sup/this.props.tot_temp)*100} />
                <div id="value" style={{ fontSize: "0.8em" }}>{(this.props.tmp_sup/this.props.tot_temp)*100}%</div>
            </div>
        );
    }
}

export default ProgressBar;