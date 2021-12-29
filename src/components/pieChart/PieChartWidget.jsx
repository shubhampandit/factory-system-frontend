import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./PieChartWidget.css";

const data = [
  { name: "Group A", value: 4 },
  { name: "Group B", value: 3 },
  { name: "Group C", value: 3 },
  { name: "Group D", value: 2 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function PieChartWidget() {
  return (
    <div className="pieChartWidget">
      <div className="pieChartTitle">Completion Chart</div>
      <div className="pieChartWrapper">
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="45%"
            outerRadius={110}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default PieChartWidget;
