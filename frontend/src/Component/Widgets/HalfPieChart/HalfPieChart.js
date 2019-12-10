import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';


export default class HalfPieChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/pb1jwdt1/';

    render() {


        const data = [
            { name: 'Humidité', value: this.props.mes_humidity }, { name: 'Température', value: this.props.mes_temperature },
            { name: 'Pollution de l\'air', value: this.props.mes_airPollution },
        ];
        
        return (
            <div>
                <div id="text" style={{ fontSize: "0.8em" }}>{this.props.halfPieChart_title}</div><br />
                <PieChart width={200} height={200}>
                    <Pie dataKey="value" startAngle={180} endAngle={0} data={data} cx={90} cy={100} outerRadius={55} fill="#60a3bc" label />
                </PieChart>
            </div>
        );
    }
}