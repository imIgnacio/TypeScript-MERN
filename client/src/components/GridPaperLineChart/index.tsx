import React from 'react';
import { LineChart, Line } from 'recharts';

type Props = {
  data: Array<{
    amount: number;
  }>;
  color: string;
  dataKey: string;
};

function GridPaperLineChart({ data, color, dataKey }: Props) {
  return (
    <LineChart width={250} height={120} data={data}>
      <Line
        type='monotone'
        strokeWidth={2}
        dataKey={dataKey}
        stroke={color}
        dot={false}
      />
    </LineChart>
  );
}

export default GridPaperLineChart;
