import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class LineChart_Tiny extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {

    const data = [
      {
        name: 'Utilisateurs', nombre: this.props.nb_user_tot_lc,
      },
      {
        name: 'Capteurs', nombre: this.props.nb_sensor_tot_lc, 
      },
      {
        name: 'Mesures', nombre: this.props.nb_measure_tot_lc, 
      }
    ];

    return (
      <div>
        <div id="text" style={{ fontSize: "0.8em" }}>{this.props.lineChart_title}</div><br />
        <LineChart
          width={130}
          height={100}
          data={data}
          margin={{
            top: 0, right: 0, left: 0, bottom: 5,
          }}
        >
          <Tooltip />
          <Line type="monotone" dataKey="nombre" stroke="#1e272e" />
        </LineChart>
      </div>
    );
  }
}
