import React from 'react';
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

export default UsersTab;