import * as React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

class Signups extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      signups:  [],
    };
  }

  componentDidMount() {
            fetch(`http://www.archaicquest.com/dev/api/GameStats/SignUpCount?monthCount=3`)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    console.log(json);
                    this.setState({signups: [...json]});
                })
                .catch((exception) => {
                    console.log('Error fetching  data: ' + exception.message);
                });
        }

  render() {
    return (
        <ResponsiveContainer height="100%" width="100%">
        <LineChart
            data={this.state.signups}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
            <Line name="New character sign ups" type="monotone" dataKey="Count" stroke="#00D717" height={60} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="Month" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" />
        </LineChart>
        </ResponsiveContainer>
    );
  }
}

export default  Signups;
