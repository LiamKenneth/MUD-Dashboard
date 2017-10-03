import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';

class Gender extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      gender: [],
    };

  }

  
  componentDidMount() {
    fetch(`http://localhost:53729/api/GameStats/GetGenderBreakdown`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
 
        var data = JSON.parse(json);
        data[0].value = 1;
        data[1].value = 1;
        const self = this

        setTimeout(function(){
          self.setState({ gender: data });
        }, 2000);
 
      })
      .catch((exception) => {
        console.log('Error fetching  data: ' + exception.message);
      });
  }

  render() {
    const COLORS = ['#44BBFF', '#CD6B97'];
    return this.state.gender.length > 1 ? (
      <div>
            <ResponsiveContainer>
              <PieChart>
                <Legend verticalAlign="top" />
  
                <Pie data={this.state.gender} fill="#8884d8" label={true} >
                  {this.state.gender.map((entry: any, index: any) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
      </div>)  : <div>Loading</div>
    }
}

export default Gender;
