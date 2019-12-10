import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Axel from '../../img/axel.png';
import Facebook from '../../img/facebook.png';
import Insta from '../../img/instagram.png';
import Snap from '../../img/snapchat.png';
import '../UserBox/UserBox.css';

class UserBox extends Component {
    render() {

        return (
            <div className="text-center">
                <Row style={{ marginTop: "8%" }}>
                    <Col>
                        <img src={Axel} alt="img_user" />
                    </Col>
                </Row>
                <br />
                <Row >
                    <Col id="name">
                        {this.props.name}
                    </Col>
                </Row>
                <Row>
                    <Col id="pseudo">
                        @{this.props.pseudo}
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col >
                        <a href="https://www.instagram.com/vntaxel/?hl=fr"><img src={Insta} alt="insta_logo" /></a>
                    </Col>
                    <Col >
                        <a href="https://www.facebook.com/axel.vinant"><img src={Facebook} alt="fb_logo" /></a>
                    </Col>
                    <Col >
                        <img src={Snap} alt="snap_logo" id="snapchat_img"/>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col id="foll-value">
                        {this.props.followers}
                    </Col>
                </Row>
                <Row>
                    <Col id="foll-text">
                        Followers
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        {/*<Tooltip_btn />*/} {/** Enlevé suite au déplacement de la userBox dans la page admin */}
                    </Col>
                </Row>
                <br />
            </div>
        );
    }
}

export default UserBox;