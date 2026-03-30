import "./AverageSessionChart.css";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="session-tooltip">
        <p>{payload[0].value} min</p>
      </div>
    );
  }
  return null;
};

const CustomCursor = ({ points }) => {
  if (!points || !points.length) return null;

  const { x } = points[0];

  return (
    <rect
      x={x}
      y={0}
      width="100%"
      height="100%"
      fill="rgba(0,0,0,0.1)"
    />
  );
};

const SimpleLineChart = ({ data }) => {
  return (
    <div className="session-chart">
      <h2 className="session-chart_title">Durée moyenne des sessions</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 50, right: 10, left: 10, bottom: 20 }}
        >
        <XAxis
          dataKey="index"
          tickFormatter={(value) => data[value].day}
          tick={{
            fill: "rgba(255,255,255,0.6)",
            fontSize: 12,
          }}
          axisLine={false}
          tickLine={false}
        />

          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              fill: "#FFF",
              stroke: "rgba(255,255,255,0.3)",
              strokeWidth: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLineChart;