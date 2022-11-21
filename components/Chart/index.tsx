import React, { PureComponent } from 'react';
import { XAxis } from 'recharts';
import { CartesianGrid } from 'recharts';
import { LabelList } from 'recharts';
import { LineChart, Line, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomizedAxisTick from './CustomAxisTick';
import CustomizedLabel from './CustomLabel';

interface Props {
  data: any[]
}

export function Chart({ data } : Props){
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" height={100} tick={<CustomizedAxisTick />} />
          <YAxis interval={0} width={20}/>
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#e16630" />
        </LineChart>
      </ResponsiveContainer>
    );
}
