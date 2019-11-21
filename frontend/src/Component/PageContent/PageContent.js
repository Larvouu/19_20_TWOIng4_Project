import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LineChart_Tiny from '../Widgets/LineChart_Tiny/LineChart_Tiny'
import Widget_PieChart from '../Widgets/PieChart/PieChart';
import UserBox from '../UserBox/UserBox';
import StatGlobale from '../StatGlobale/StatGlobale';
import Headphones from '../../img/headphones.png';
import Jukebox from '../../img/jukebox.png'
import './PageContent.css';

class PageContent extends Component {

    //toutes les infos
    // const le gros tableau = {[{}, {}, {}]}

    render() {
        return (
            <div id="pageContent">
                {/* TOUT EST SUR LA MEME LIGNE ROW*/}
                <Row > 
                    {/* USERBOX*/}
                    <Col className="box" sm={{ size: 3, offset: 0 }}>
                        <UserBox name="Axel Vinant" pseudo="vntaxel" followers={1101} />
                    </Col>
                    {/* TOUT LE RESTE : COL*/}
                    <Col sm={{ size: 9, offset: 0 }}>
                        <Col sm={{ size: 3, offset: 0 }}>
                            <Row className="box">
                                <StatGlobale img={Headphones} name="Ecoutes" value="5 642" />
                            </Row>
                            {<br/>}
                            <Row className="box">
                                <StatGlobale img={Jukebox} name="Musiques" value="352" />
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PageContent;