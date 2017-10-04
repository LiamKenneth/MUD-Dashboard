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
    fetch(`http://www.archaicquest.com/dev/api/GameStats/GetGenderBreakdown`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
 
        var data = JSON.parse(json);
 
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
