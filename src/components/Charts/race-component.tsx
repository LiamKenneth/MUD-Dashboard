import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';

class Race extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      race: [],
    };

  }

  componentDidMount() {
    fetch(`http://www.archaicquest.com/staging/api/GameStats/GetClassBreakdown`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            this.setState({race: [...json]});
        })
        .catch((exception) => {
            console.log('Error fetching  data: ' + exception.message);
        });
}

  render() {
    const COLORS = ['#FF7416', '#CD6B97', '#71BA51', '#60646D', '#1ABC9C'];
    return (
      <ResponsiveContainer>
        <PieChart>
          <Legend verticalAlign="top" />
          <Pie data={this.state.race} fill="#8884d8" label={true} dataKey="value">
            {this.state.race.map((entry: any, index: any) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default Race;
