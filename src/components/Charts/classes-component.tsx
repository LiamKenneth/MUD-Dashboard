import * as React from 'react';
import {ResponsiveContainer, PieChart, Pie, Legend} from 'recharts';


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
  

      render () {
 
        return (

        <ResponsiveContainer>
        <PieChart>
          <Pie data={this.state.classes} fill="#8884d8"  label />
        </PieChart>
       </ResponsiveContainer>
      );
    }
  }

export default Classes;
