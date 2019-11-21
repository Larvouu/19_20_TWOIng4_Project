import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { userInfo } from 'os';
import Man from '../../img/man.jpg';
import Facebook from '../../img/facebook.png';
import Insta from '../../img/instagram.png';
import Snap from '../../img/snapchat.png';
import Tooltip_btn from '../Tooltip_btn/Tooltip_btn';
import '../UserBox/UserBox.css';

class UserBox extends Component {
    render() {
        return (
            <div className="text-center">
                <Row >
                    <Col>
                        <img src={Man} alt="img_user" />
                    </Col>
                </Row>
                <br/>
                <Row >
                    <Col>
                        <h2>{this.props.name}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        @{this.props.pseudo}
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col >
                        <a href="https://www.instagram.com/vntaxel/?hl=fr"><img src={Insta} alt="insta_logo"/></a>
                    </Col>
                    <Col >
                        <a href="https://www.facebook.com/axel.vinant"><img src={Facebook} alt="fb_logo"/></a>
                    </Col>
                    <Col >
                        <img src={Snap} alt="snap_logo" />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <h1>{this.props.followers}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col id="text-foll">
                        Followers
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Tooltip_btn />
                    </Col>
                </Row>
                <br/>
            </div>
        );
    }
}

export default UserBox;