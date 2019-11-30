import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default class PieChart_Stylax extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

    render() {
        return (
            <div>
                <div id="text" style={{ fontSize: "0.8em" }}>Salut</div><br />
                <PieChart width={200} height={200} onMouseEnter={this.onPieEnter}>
                    <Pie
                        data={data}
                        cx={100}
                        cy={50}
                        innerRadius={40}
                        outerRadius={55}
                        fill="#1e272e"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill="#60a3bc" />)
                        }
                    </Pie>
                </PieChart>
            </div>
        );
    }
}