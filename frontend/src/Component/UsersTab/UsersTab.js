import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import DataTable from './data-table';

export default class UsersTab extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/users')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <table className="table table-striped table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <td>ID</td>
                            <td>Localisation</td>
                            <td>Persons in house</td>
                            <td>House size</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.dataTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

/*import React from 'react';
import { Table } from 'reactstrap';

const UsersTab = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>id</th>
          <th>Location</th>
          <th>PersonsInHouse</th>
          <th>houseSize</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default UsersTab;*/