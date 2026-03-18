import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

const ScoreChart = ({ score }) => {
    
    const data = [
        {
            value: score * 100
        }
    ];
return (
    <RadialBarChart
      width={200}
      height={200}
      innerRadius="80%"
      outerRadius="100%"
      startAngle={90}
      endAngle={450}
      data={data}
    >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar dataKey="value" fill="#FF0000" cornerRadius={10} />
    </RadialBarChart>
  );
}

export default ScoreChart;