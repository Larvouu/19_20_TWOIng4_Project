import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Tooltip_btn from '../Tooltip_btn/Tooltip_btn';

class Navbar extends Component {



    render() {

        return (
            <Container>
                <Row>
                    <Col sm={{ size: 1, offset: 9 }}>
                        <Tooltip_btn
                        /*btn_color="success"
                        btn_text="Gérer"
                        btn_id="navbar_btn"
                        tooltip_placement="bottom"
                        tooltip_text="Ajoutez, supprimez, gérez vos widgets !"*/
                        />
                    </Col>
                    <Col sm={{ size: 2, offset: 0 }}>
                        19 Nov 2019, Tuesday
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Navbar;