import React, { PureComponent } from 'react';
import { LineChart, Line, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
  data: any[]
}

export function Chart({ data } : Props){
  const demoUrl = 'https://codesandbox.io/s/tiny-line-chart-r5z0f';

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <YAxis />
          <Legend />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
}
