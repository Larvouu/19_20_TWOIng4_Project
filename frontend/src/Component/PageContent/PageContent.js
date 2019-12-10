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
            nb_sensors: 0,
            nb_users: 0,
            //Pour le halfPieChart
            nb_measures_himidity: 0,
            nb_measures_temperature: 0,
            nb_measures_airPollution: 0,
            hpc_title: 'Répartition des types de mesures sur 1000 capteurs : humidité, température, puis pollution de l\'air',
            //Pour le PieChart_Stylax
            nb_users_houseSize_small: 0,
            nb_users_houseSize_medium: 0,
            nb_users_houseSize_big: 0,
            pcs_title: 'Répartition des tailles de maisons des utilisateurs',
            //Pour le BarChart
            nb_sensors_loc_kitchen: 0,
            nb_sensors_loc_livingRoom: 0,
            nb_sensors_loc_bedroom: 0,
            nb_sensors_loc_bathroom: 0,
            nb_sensors_loc_entrance: 0,
            bc_title: 'Répartition des capteurs selon leur localisation, cliquez sur une barre',
            //Pour la progressBar
            nb_temp_sup_ou_eg_vingt: 0,
            pb_title: 'Taux de températures supérieures ou égale à 30 degrés',
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
        //retourne le nombre de measures de type humidity - temperature - airPollution
        axios.get('http://localhost:3000/measures/humidity')
            .then(res => {
                this.setState({ nb_measures_himidity: res.data.length });
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get('http://localhost:3000/measures/temperature')
            .then(res => {
                this.setState({ nb_measures_temperature: res.data.length });
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get('http://localhost:3000/measures/airPollution')
            .then(res => {
                this.setState({ nb_measures_airPollution: res.data.length });
            })
            .catch(function (error) {
                console.log(error);
            })
        //retourne le nombre de houseSize pour les 3 valeurs : small, medium, big
        axios.get('http://localhost:3000/users/houseSize/small')
            .then(res => {
                this.setState({ nb_users_houseSize_small: res.data.length });
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get('http://localhost:3000/users/houseSize/medium')
            .then(res => {
                this.setState({ nb_users_houseSize_medium: res.data.length });
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get('http://localhost:3000/users/houseSize/big')
            .then(res => {
                this.setState({ nb_users_houseSize_big: res.data.length });
            })
            .catch(function (error) {
                console.log(error);
            })
        //retourne le nombre de location pour les 5 valeurs : kitchen, livingRoom, bedroom, bathroom, entrance
        axios.get('http://localhost:3000/sensors/location/kitchen')
            .then(res => {
                this.setState({ nb_sensors_loc_kitchen: res.data.length });
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get('http://localhost:3000/sensors/location/livingroom')
            .then(res => {
                this.setState({ nb_sensors_loc_livingRoom: res.data.length });
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get('http://localhost:3000/sensors/location/bedroom')
            .then(res => {
                this.setState({ nb_sensors_loc_bedroom: res.data.length });
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get('http://localhost:3000/sensors/location/bathroom')
            .then(res => {
                this.setState({ nb_sensors_loc_bathroom: res.data.length });
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get('http://localhost:3000/sensors/location/entrance')
            .then(res => {
                this.setState({ nb_sensors_loc_entrance: res.data.length });
            })
            .catch(function (error) {
                console.log(error);
            })
        //retourne le nombre de températures mesurées >= 20
        axios.get('http://localhost:3000/measures/tempsSupOuEgAVingt')
            .then(res => {
                this.setState({ nb_temp_sup_ou_eg_vingt: res.data.length });
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
                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 1 }} lg={{ size: 3, offset: 1 }} style={{ marginBottom: "2%" }}>
                        <Row className="box">
                            <StatGlobale img={Uni} name="Utilisateurs" value={this.state.nb_users} />
                        </Row>
                        {<br />}
                        <Row className="box">
                            <StatGlobale img={Uni} name="Capteurs" value={this.state.nb_sensors} />
                        </Row>
                    </Col>

                    {/* LE LINE CHART*/}
                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 1 }} lg={{ size: 2, offset: 0 }} style={{ marginBottom: "2%" }} className="box" id="widget4" >
                        <LineChart_Tiny />
                    </Col>
                    {/* LE LINE CHART 2 OU PROGRESS BAR*/}
                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 1 }} lg={{ size: 2, offset: 0 }} style={{ marginBottom: "2%" }} className="box" id="widget5">
                        <AreaChart_Tiny />
                    </Col>

                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 1 }} lg={{ size: 2, offset: 0 }} style={{ marginBottom: "2%" }} className="box" id="widget6">
                        <ProgressBar
                            tmp_sup={this.state.nb_temp_sup_ou_eg_vingt}
                            tot_temp={this.state.nb_measures_temperature}
                            progressBar_title={this.state.pb_title}
                        />
                    </Col>
                </Row>
                {<br />} {<br />}
                <Row>
                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 1 }} lg={{ size: 3, offset: 1 }} style={{ marginBottom: "2%" }} className="box">
                        <BarChart_Tiny
                            sens_loc_k={this.state.nb_sensors_loc_kitchen}
                            sens_loc_lR={this.state.nb_sensors_loc_livingRoom}
                            sens_loc_bed={this.state.nb_sensors_loc_bedroom}
                            sens_loc_bath={this.state.nb_sensors_loc_bathroom}
                            sens_loc_e={this.state.nb_sensors_loc_entrance}
                            barChart_title={this.state.bc_title}
                        />
                    </Col>
                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 1 }} lg={{ size: 3, offset: 0 }} style={{ marginBottom: "2%" }} className="box" id="widget2">
                        <HalfPieChart
                            mes_humidity={this.state.nb_measures_himidity}
                            mes_temperature={this.state.nb_measures_temperature}
                            mes_airPollution={this.state.nb_measures_airPollution}
                            halfPieChart_title={this.state.hpc_title}
                        />
                    </Col>
                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} xl={{ size: 4, offset: 0 }} style={{ marginBottom: "2%" }} className="box" id="widget3">
                        <PieChart_Stylax
                            use_hS_small={this.state.nb_users_houseSize_small}
                            use_hS_medium={this.state.nb_users_houseSize_medium}
                            use_hS_big={this.state.nb_users_houseSize_big}
                            pieChartStylax_title={this.state.pcs_title}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PageContent;