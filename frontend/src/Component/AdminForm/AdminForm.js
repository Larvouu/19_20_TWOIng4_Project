import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'; //Pour l'ajout d'utilisateur
import './AdminForm.css';

class AdminForm extends Component {

  constructor(props) {
    super(props)
    this.onChangeUserLocation = this.onChangeUserLocation.bind(this);
    this.onChangeUserPersonsInHouse = this.onChangeUserPersonsInHouse.bind(this);
    this.onChangeUserHouseSize = this.onChangeUserHouseSize.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      location: '',
      personsInHouse: '',
      houseSize: ''
    }
  }

  onChangeUserLocation(e) {
    this.setState({ location: e.target.value })
  }

  onChangeUserPersonsInHouse(e) {
    this.setState({ personsInHouse: e.target.value })
  }

  onChangeUserHouseSize(e) {
    this.setState({ houseSize: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const userObject = {
        location: this.state.location,
        personsInHouse: this.state.personsInHouse,
        houseSize: this.state.houseSize
    };

    axios.put('http://localhost:3000/user', userObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });

    this.setState({ location: '', personsInHouse: '', houseSize: '' })
    /*alert('pays : ' + this.state.location 
        + '\nnombre : '+ this.state.personsInHouse
        + '\ntaille : '+ this.state.houseSize);
        e.preventDefault();*/
}


  render() {
    return (
      <Form>
        <div id="title-form" style={{ marginTop: "3%", marginBottom: "3%" }}>Ajouter un utilisateur </div>
        <FormGroup>
          <Label for="location" className="text-form">Pays</Label>
          <Input 
            type="country" 
            name="form_location" 
            id="input_location" 
            placeholder="france"
            value={this.state.location}
            onChange={this.onChangeUserLocation}
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label for="personsInHouse" className="text-form">Nombre de personnes dans la maison</Label>
          <Input 
            type="number" 
            name="form_personsInHouse" 
            id="input_personsInHouse" 
            placeholder="3" 
            value={this.state.personsInHouse}
            onChange={this.onChangeUserPersonsInHouse}
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label for="houseSize" className="text-form">Taille de la maison</Label>
          <Input 
            type="select" 
            name="form_houseSize" 
            id="input_houseSize"
            value={this.state.houseSize}
            onChange={this.onChangeUserHouseSize}
            className="form-control"
          >
            <option className="text-form">small</option>
            <option className="text-form">medium</option>
            <option className="text-form">big</option>
          </Input>
        </FormGroup>

        <Button 
          type="submit"  //Ne marche pas encore
          onClick={this.onSubmit}
          value="Create User"
          outline color="info"
          className="text-form"
          style={{ marginTop: "5%", marginBottom: "5%" }}
        >
          Créer l'utilisateur
        </Button>
      </Form>
    );
  }
}

export default AdminForm;