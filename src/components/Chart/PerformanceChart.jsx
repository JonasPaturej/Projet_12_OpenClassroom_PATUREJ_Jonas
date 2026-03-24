import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const SimpleRadarChart = ({ data }) => {
  return (
    <RadarChart
      width={300}
      height={300}
      outerRadius="70%"
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis tick={false} axisLine={false} />
      <Radar dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.7} />
    </RadarChart>
  );
};

export default SimpleRadarChart;