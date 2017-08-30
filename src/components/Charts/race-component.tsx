import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';

class Race extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      race: [
        {
          name: 'Human',
          value: 25,
        },
        {
          name: 'Elf',
          value: 65,
        },
        {
          name: 'Dwarf',
          value: 32,
        },
        {
          name: 'Halfling',
          value: 15,
        },
        {
          name: 'Dark Elf',
          value: 75,
        },
      ],
    };

  }

  render() {
    const COLORS = ['#FF7416', '#CD6B97', '#71BA51', '#60646D', '#1ABC9C'];
    return (
      <ResponsiveContainer>
        <PieChart>
          <Legend verticalAlign="top" />
          <Pie data={this.state.race} fill="#8884d8" label={true}>
            {this.state.race.map((entry: any, index: any) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default Race;
