import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SimpleBarChart = ({ data }) => {
  console.log("data dans chart:", data); 

  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
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