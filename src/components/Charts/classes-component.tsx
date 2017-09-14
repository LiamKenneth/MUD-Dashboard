import * as React from 'react';
import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts';

class Classes extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      classes:  [
            {
                name: 'Warrior',
                value: 9,
            },
            {
                name: 'Mage',
                value: 11,
            },
            {
                name: 'Thief',
                value: 4,
            },
            {
                name: 'Cleric',
                value: 8,
            },

        ],
    };

  }

//   componentDidMount() {
 
//     fetch(`http://www.archaicquest.com/staging/api/GameStats/NewPlayers`)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (json) {
//             console.log(json)
//             this.setState({ ...json });
//         })
//         .catch(function (exception) {
//             console.log("Error fetching  data: " + exception.message);
//         });
// };


  render() {
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        return (

        <ResponsiveContainer>
        <PieChart>
        <Legend verticalAlign="top" />
          <Pie data={this.state.classes} fill="#8884d8"  label={true}>
          {this.state.classes.map((entry: any, index: any) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)}
          </Pie>
        </PieChart>
       </ResponsiveContainer>
      );
    }
  }

export default Classes;
