import * as React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

class MobKills extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      kills:  [
            {
                Month: 'Sep 2016',
                Count: 1876,
            },
            {
                Month: 'Oct 2016',
                Count: 2324,
            },
            {
                Month: 'Nov 2016',
                Count: 4480,
            },
            {
                Month: 'Dec 2016',
                Count: 5600,
            },
            {
                Month: 'Jan 2017',
                Count: 6789,
            },
            {
                Month: 'Feb 2017',
                Count: 9000,
            },
            {
                Month: 'Mar 2017',
                Count: 9912,
            },
            {
                Month: 'Apr 2017',
                Count: 9968,
            },
            {
                Month: 'May 2017',
                Count: 9996,
            },
            {
                Month: 'Jun 2017',
                Count: 12012,
            },
            {
                Month: 'Jul 2017',
                Count: 13692,
            },
            {
                Month: 'Aug 2017',
                Count: 15904,
            },
        ],
    };
  }

  render() {
    return (
        <ResponsiveContainer height="100%" width="100%">
        <LineChart
            data={this.state.kills}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
            <Line name="Mob Deaths" type="monotone" dataKey="Count" stroke="#F24D16" height={60} />
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

export default MobKills;
