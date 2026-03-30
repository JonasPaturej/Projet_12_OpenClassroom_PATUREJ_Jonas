import { useEffect, useState } from "react";
import "./ScoreChart.css";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const SimpleRadialChart = ({ score }) => {
    const [chartConfig, setChartConfig] = useState({
        barSize: 12,
        innerRadius: "75%",
        outerRadius: "90%",
        cy: "50%",
    })

  useEffect(() => {
    const updateChartSize = () => {
      if (window.innerWidth <= 1200) {
        setChartConfig({
            barSize: 8,
            innerRadius: "78%",
            outerRadius: "90%",
            cy: "53%",
        });
      } else if (window.innerWidth <= 1350) {
        setChartConfig({
            barSize: 10,
            innerRadius: "76%",
            outerRadius: "90%",
            cy: "52%",
        });
      } else {
        setChartConfig({
            barSize: 12,
            innerRadius: "75%",
            outerRadius: "90%",
            cy: "50%",
        });
      }
    };

    updateChartSize();
    window.addEventListener("resize", updateChartSize);

    return () => window.removeEventListener("resize", updateChartSize);
  }, []);

    const scoreValue = (score ?? 0) * 100;
    const data = [
        {
            value: scoreValue,
        },
    ];

    return (
    <div className="score-chart">
        <h2 className="score-chart_title">Score</h2>

        <div className="score-chart_content">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    width={250}
                    height={250}
                    cx="50%"
                    cy={chartConfig.cy}
                    innerRadius={chartConfig.innerRadius}
                    outerRadius={chartConfig.outerRadius}
                    barSize={chartConfig.barSize}
                    data={data}
                    startAngle={90}
                    endAngle={450}
                >
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    tick={false}
                />

                <RadialBar
                    dataKey="value"
                    fill="#FF0000"
                    cornerRadius={10}
                    background={{ fill: "#FBFBFB" }} 
                />
                </RadialBarChart>
            </ResponsiveContainer>
            
            <div className="score-chart_text">
            <p className="score-chart_percent">{scoreValue}%</p>
            <p className="score-chart_label">
                de votre
                <br />
                objectif
            </p>
            </div>
        </div>
    </div>
  );
};

export default SimpleRadialChart;