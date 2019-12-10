import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../StatGlobale/StatGlobale.css';

class StatGlobale extends Component {
    render() {
        return (
            <Row className="text-center">
                <Col xs={{ size: 4, offset: 1 }} lg={{ size: 4 }}>
                    <img src={this.props.img} alt="img music" />
                </Col>
                <Col xs={{ size: 6, offset: 1 }} lg={{ size: 6 }} >
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