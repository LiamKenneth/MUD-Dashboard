import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';

class Gender extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      gender: [
        {
          name: 'Male',
          value: 25,
        },
        {
          name: 'Female',
          value: 65,
        },
      ],
    };

  }

  render() {
    const COLORS = ['#44BBFF', '#CD6B97'];
    return (
      <ResponsiveContainer>
        <PieChart>
          <Legend verticalAlign="top" />
          <Pie data={this.state.gender} fill="#8884d8" label>
            {this.state.gender.map((entry: any, index: any) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default Gender;
