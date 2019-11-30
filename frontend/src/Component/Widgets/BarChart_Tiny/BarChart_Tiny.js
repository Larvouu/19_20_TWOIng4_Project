import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import '../BarChart_Tiny/BarChart_Tiny.css';

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];

export default class BarChart_Tiny extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9kd8rssL/';

    render() {
        return (
            <div>
                <div id="text" style={{ fontSize: "0.8em" }}>Salut</div><br />
                <BarChart width={160} height={150} data={data}>
                    <Bar dataKey="uv" fill="#60a3bc" />
                </BarChart>
            </div>
        );
    }
}