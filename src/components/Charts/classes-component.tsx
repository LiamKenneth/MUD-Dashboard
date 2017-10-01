import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';

class Classes extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      classes: [],
    };

  }

  componentDidMount() {
    fetch(`http://www.archaicquest.com/staging/api/GameStats/GetClassBreakdown`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({ classes: json });
      })
      .catch((exception) => {
        console.log('Error fetching  data: ' + exception.message);
      });
  }

  render() {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return this.state.classes.length > 1 ?
    (
    <div>
          <ResponsiveContainer height="100%" width="100%">
            <PieChart>
              <Legend verticalAlign="top" />
              <Pie data={this.state.classes} fill="#8884d8" label={true} dataKey="Name">
                {this.state.classes.map((entry: any, index: any) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
    </div>) : (
      <div>Loading...</div>
    );
  }
}

export default Classes;
