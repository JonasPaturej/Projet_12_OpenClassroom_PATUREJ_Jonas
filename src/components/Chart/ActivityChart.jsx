import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SimpleBarChart = ({ data }) => {

  return (
    <BarChart
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
      <YAxis yAxisId="left" dataKey="kilogram" />
      <YAxis yAxisId="right" dataKey="calories" hide />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
      <Bar yAxisId="right" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
    </BarChart>
  );
};

export default SimpleBarChart;