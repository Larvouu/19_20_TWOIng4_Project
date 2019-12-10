import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LineChart_Tiny from '../Widgets/LineChart_Tiny/LineChart_Tiny';
import StatGlobale from '../StatGlobale/StatGlobale';
//images
import Uni from '../../img/uni.png';
//axios
import axios from 'axios';
//components
import './PageContent.css';
import ProgressBar from '../Widgets/ProgressBar/ProgressBar';
import AreaChart_Tiny from '../Widgets/AreaChart_Tiny/AreaChart_Tiny';
import BarChart_Tiny from '../Widgets/BarChart_Tiny/BarChart_Tiny';
import HalfPieChart from '../Widgets/HalfPieChart/HalfPieChart';
import PieChart_Stylax from '../Widgets/PieChart_Stylax/PieChart_Stylax';

class PageContent extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            //Pour StatGlobale
            nb_sensors : 0,
            nb_users : 0
        };
    }

    componentDidMount() {
        //retourne le nombre de sensors
        axios.get('http://localhost:3000/sensors')
            .then(res => {
                this.setState({ nb_sensors: res.data.length });
            })
            .catch(function (error) {
                console.log(error);
            });
        //retourne le nombre de users
        axios.get('http://localhost:3000/users')
            .then(res => {
                this.setState({ nb_users: res.data.length });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div id="pageContent">
                {/* TOUT EST SUR LA MEME LIGNE ROW */}
                <Row>
                    {/* LES DEUX StatGlobale*/}
                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 1 }} lg={{ size: 3, offset: 1 }} style={{marginBottom:"2%"}}>
                        <Row className="box">
                            <StatGlobale img={Uni} name="Utilisateurs" value={this.state.nb_users} />
                        </Row>
                        {<br />}
                        <Row className="box">
                            <StatGlobale img={Uni} name="Capteurs" value={this.state.nb_sensors} />
                        </Row>
                    </Col>

                    {/* LE LINE CHART*/}
                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 1 }} lg={{ size: 2, offset: 0 }} style={{marginBottom:"2%"}} className="box" id="widget4" >
                        <LineChart_Tiny />
                    </Col>
                    {/* LE LINE CHART 2 OU PROGRESS BAR*/}
                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 1 }} lg={{ size: 2, offset: 0 }} style={{marginBottom:"2%"}} className="box" id="widget5">
                        <AreaChart_Tiny />
                    </Col>

                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 1 }} lg={{ size: 2, offset: 0 }} style={{marginBottom:"2%"}} className="box" id="widget6">
                        <ProgressBar />
                    </Col>
                </Row>
                {<br />} {<br />}
                <Row>
                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 1 }} lg={{ size: 3, offset: 1 }} style={{marginBottom:"2%"}} className="box">
                        <BarChart_Tiny />
                    </Col>
                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 1 }} lg={{ size: 3, offset: 0 }} style={{marginBottom:"2%"}} className="box" id="widget2">
                        <HalfPieChart />
                    </Col>
                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 1 }} lg={{ size: 3, offset: 0 }} style={{marginBottom:"2%"}} className="box" id="widget3">
                        <PieChart_Stylax />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PageContent;