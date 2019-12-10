import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import '../AreaChart_Tiny/AreaChart_Tiny.css';



export default class AreaChart_Tiny extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/tv8zfzxo/';

  render() {
    const data = [
      {
        name: 'Lancement', uv: 1, 
      },
      {
        name: 'Maintenant', uv: this.props.nb_mes_tot,
      }
    ];
    return (
        <div>
            <div id="text" style={{ fontSize: "0.8em" }}>{this.props.areaChart_title}</div><br/>
      <AreaChart
        width={130}
        height={100}
        data={data}
        margin={{
          top: 5, right: 0, left: 0, bottom: 5,
        }}
      >
        <Area type="natural" dataKey="uv" stroke="#1e272e" fill="#60a3bc" />
      </AreaChart>
      </div>
    );
  }
}
