import "./SimpleRadarChart.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const SimpleRadarChart = ({ data }) => {
  return (
    <div className="performance-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="65%"
          data={data}
        >
          <PolarGrid radialLines={false} stroke="#FFFFFF" />
          <PolarAngleAxis
            dataKey="kind"
            tick={{
              fill: "#FFFFFF",
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleRadarChart;