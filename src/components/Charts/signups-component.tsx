import * as React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

class Signups extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      signups:  [
            {
                Month: 'Sep 2016',
                Count: 0,
            },
            {
                Month: 'Oct 2016',
                Count: 0,
            },
            {
                Month: 'Nov 2016',
                Count: 0,
            },
            {
                Month: 'Dec 2016',
                Count: 0,
            },
            {
                Month: 'Jan 2017',
                Count: 0,
            },
            {
                Month: 'Feb 2017',
                Count: 0,
            },
            {
                Month: 'Mar 2017',
                Count: 0,
            },
            {
                Month: 'Apr 2017',
                Count: 0,
            },
            {
                Month: 'May 2017',
                Count: 0,
            },
            {
                Month: 'Jun 2017',
                Count: 0,
            },
            {
                Month: 'Jul 2017',
                Count: 0,
            },
            {
                Month: 'Aug 2017',
                Count: 9,
            },
        ],
    };
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
