import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LineChart_Tiny from '../Widgets/LineChart_Tiny/LineChart_Tiny';
import StatGlobale from '../StatGlobale/StatGlobale';
// images
import Headphones from '../../img/headphones.png';
import Jukebox from '../../img/jukebox.png';
import Uni from '../../img/uni.png';
//
import './PageContent.css';
import ProgressBar from '../Widgets/ProgressBar/ProgressBar';
import AreaChart_Tiny from '../Widgets/AreaChart_Tiny/AreaChart_Tiny';
import BarChart_Tiny from '../Widgets/BarChart_Tiny/BarChart_Tiny';
import HalfPieChart from '../Widgets/HalfPieChart/HalfPieChart';
import PieChart_Stylax from '../Widgets/PieChart_Stylax/PieChart_Stylax';

class PageContent extends Component {

    //toutes les infos
    // const le gros tableau = {[{}, {}, {}]}

    render() {
        return (
            <div id="pageContent">
                {/* TOUT EST SUR LA MEME LIGNE ROW*/}
                <Row >
                    <Col sm={{ size: 12, offset: 0 }}> {/** coucou test */}
                        <Row>
                            {/* LES DEUX StatGlobale*/}
                            <Col sm={{ size: 3, offset: 1 }}>
                                <Row className="box">
                                    <StatGlobale img={Uni} name="Ecoutes" value="5 642" />
                                </Row>
                                {<br />}
                                <Row className="box">
                                    <StatGlobale img={Uni} name="Musiques" value="352" />
                                </Row>
                            </Col>

                            {/* LE LINE CHART*/}
                            <Col sm={{ size: 2, offset: 0 }} className="box" id="widget4" >
                                <LineChart_Tiny/>
                            </Col>
                            {/* LE LINE CHART 2 OU PROGRESS BAR*/}
                            <Col sm={{ size: 2, offset: 0 }} className="box" id="widget5">
                                <AreaChart_Tiny/>
                            </Col>

                            <Col sm={{ size: 2, offset: 0 }} className="box" id="widget6">
                                <ProgressBar/>
                            </Col>
                        </Row>
                        {<br />} {<br />}
                        <Row>
                            <Col sm={{ size: 3, offset: 1 }} className="box">
                                <BarChart_Tiny/>
                            </Col>
                            <Col sm={{ size: 3, offset: 0 }} className="box" id="widget2">
                                <HalfPieChart/>
                            </Col>
                            <Col sm={{ size: 3, offset: 0 }} className="box" id="widget3">
                                <PieChart_Stylax/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PageContent;