import "./SimpleBarChart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activity-tooltip">
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}Kcal</p>
      </div>
    );
  }
  return null;
};

const SimpleBarChart = ({ data }) => {
  return (
    <div className="activity-chart">
      <div className="activity-chart_header">
        <h2>Activité quotidienne</h2>

        <div className="activity-chart_legend">
          <span className="legend-item">
            <span className="dot black"></span> Poids (kg)
          </span>
          <span className="legend-item">
            <span className="dot red"></span> Calories brûlées (kCal)
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
          barGap={8}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="day"
            tickLine={false}
            stroke="#9B9EAC"
          />

          <YAxis
            yAxisId="left"
            orientation="right"
            tickLine={false}
            axisLine={false}
            stroke="#9B9EAC"
          />

          <Tooltip content={<CustomTooltip />} />

          <Bar
            yAxisId="left"
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            barSize={7}
          />

          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;