import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../StatGlobale/StatGlobale.css';

class StatGlobale extends Component {
    render() {
        return (
            <Row>
                <Col sm={{ size: 5 }}>
                    <img src={this.props.img} alt="img music" />
                </Col>
                <Col sm={{ size: 7 }} className="text-center">
                    <Row id="title" style={{ fontSize: "0.8em" }} >
                        <Col>{this.props.name}</Col>
                    </Row>
                    <Row id="value" style={{ fontSize: "1.4em" }}>
                        <Col>{this.props.value}</Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default StatGlobale;