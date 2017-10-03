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
    fetch(`http://localhost:53729/api/GameStats/GetRaceBreakdown`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
 
        var data = JSON.parse(json);
 
        const self = this

        setTimeout(function(){
          self.setState({ race: data });
        }, 2000);
 
      })
      .catch((exception) => {
        console.log('Error fetching  data: ' + exception.message);
      });
  }

  render() {
    const COLORS = ['#FF7416', '#CD6B97', '#71BA51', '#60646D', '#1ABC9C'];
    return this.state.race.length > 1 ? (
      <div>
            <ResponsiveContainer>
              <PieChart>
                <Legend verticalAlign="top" />
  
                <Pie data={this.state.race} fill="#8884d8" label={true} >
                  {this.state.race.map((entry: any, index: any) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
      </div>)  : <div>Loading</div>;
  }
}

export default Race;
