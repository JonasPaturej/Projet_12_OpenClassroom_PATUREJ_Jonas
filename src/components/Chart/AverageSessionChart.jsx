import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function SimpleLineChart({ data }) {
  return (
    <LineChart
      width={700}
      height={300}
      data={data}      
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis dataKey="sessionLength" hide/>
      <Tooltip />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="#000000"
        strokeWidth={2}
        dot={false}
        activeDot={{ r: 6 }}
      />
    </LineChart>
  );
}