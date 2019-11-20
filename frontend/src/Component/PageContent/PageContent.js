import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LineChart_Tiny from '../Widgets/LineChart_Tiny/LineChart_Tiny'
import Widget_PieChart from '../Widgets/PieChart/PieChart';
import UserBox from '../UserBox/UserBox';
import './PageContent.css';

class PageContent extends Component {

    //toutes les infos
    // const le gros tableau = {[{}, {}, {}]}

    render() {
        return (
            <Container  id="pageContent">
                <Row >
                    <Col id="userbox" sm={{size:3, offset:0}}>
                        <UserBox name="Axel Vinant" pseudo="vntaxel" followers={1101} />
                    </Col>
                </Row>
                {/*<Widget_PieChart />
                <LineChart_Tiny />*/}
            </Container>
        );
    }
}

export default PageContent;