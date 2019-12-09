import React, { Component } from 'react';
import UserBox from '../UserBox/UserBox';
import { Container, Row, Col } from 'reactstrap';
import AdminForm from '../AdminForm/AdminForm';

class PageAdmin extends Component {
    render() {
        return (
            <div>
                <Row style={{marginTop:"3%"}}>
                    <Col className="box" xs={{ size: 10, offset: 1 }} sm={{ size: 6, offset: 3 }} lg={{ size: 3, offset: 1 }} style={{marginBottom:"5%"}}>
                        <UserBox name="Axel Vinant" pseudo="vntaxel" followers={1121} />
                    </Col>
                    <Col className="box" xs={{ size: 10, offset: 1 }} sm={{ size: 6, offset: 3 }} lg={{ size: 6, offset: 1 }}>
                        <AdminForm />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PageAdmin;