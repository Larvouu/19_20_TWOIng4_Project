import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './BarChart_Tiny.css';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/7has60ua/';



  state = {
    
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const { activeIndex } = this.state;
    
    const data= [
        {
          name: 'Cuisine', value: this.props.sens_loc_k, 
        },
        {
          name: 'Salon', value: this.props.sens_loc_lR, 
        },
        {
          name: 'Chambre', value: this.props.sens_loc_bed, 
        },
        {
          name: 'Salle de bain', value: this.props.sens_loc_bath, 
        },
        {
          name: 'Entrée', value: this.props.sens_loc_e, 
        },
      ];
      const activeItem = data[activeIndex];

    return (
      <div>
        <div id="text" style={{ fontSize: "0.8em" }}>{this.props.barChart_title}</div><br />
        <BarChart width={160} height={150} data={data}>
          <Bar dataKey="value" onClick={this.handleClick}>
            {
                data.map((entry, index) => (
                  <Cell cursor="pointer" fill={index === activeIndex ? '#ffffff' : '#60a3bc'} key={`cell-${index}`} />
                ))
              }
          </Bar>
        </BarChart>
        <div id="explaination">{activeItem.name} : {activeItem.value}</div>
      </div>
    );
  }
}


/*import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/7has60ua/';



    state = {
        data: [
            {
                name: 'cuisine', value: this.props.sens_loc_k,
            },
            {
                name: 'salon', value: this.props.sens_loc_lR,
            },
            {
                name: 'chambre', value: this.props.sens_loc_bed,
            },
            {
                name: 'salle de bain', value: this.props.sens_loc_bath,
            },
            {
                name: 'entrée', value: this.props.sens_loc_e,
            },
        ],
        activeIndex: 0,
    };

    handleClick = (data1, index) => {
        this.setState({
            activeIndex: index,
        });
    }

    render() {
        const { activeIndex, data } = this.state;
        const activeItem = data[activeIndex];
        const data1 = [
            {
                name: 'cuisine', value: this.props.sens_loc_k,
            },
            {
                name: 'salon', value: this.props.sens_loc_lR,
            },
            {
                name: 'chambre', value: this.props.sens_loc_bed,
            },
            {
                name: 'salle de bain', value: this.props.sens_loc_bath,
            },
            {
                name: 'entrée', value: this.props.sens_loc_e,
            },
        ];

        return (
            <div>
                <div id="text" style={{ fontSize: "0.8em" }}>{this.props.barChart_title}</div><br />
                <BarChart width={160} height={150} data={data}>
                    <Bar dataKey="value" onClick={this.handleClick}>
                        {
                            data.map((entry, index) => (
                                <Cell cursor="pointer" fill={index === activeIndex ? '#60a3bc' : '#ffffff'} key={`cell-${index}`} />
                            ))
                        }
                    </Bar>
                </BarChart>
                <p className="content">{`value of "${activeItem.name}": ${activeItem.value}`}</p>
            </div>
        );
    }
}

*/

/*import React, { PureComponent } from 'react';
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
}*/