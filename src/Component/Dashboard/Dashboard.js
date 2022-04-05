import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
} from "recharts";
import useChart from "../Hook/useChart";
import "./Dashboard.css";

const Dashboard = () => {
  const [charts] = useChart();
  return (
    <div>
      <section className="chart_container">
        <div className="chart">
          {/* chart 1 */}
          <h1>Interest</h1>
          <LineChart width={350} height={250} data={charts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <Tooltip />
            <Legend />
            <Line type="monotoneX" dataKey="investment" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="chart">
          {/* chart 2 */}
          <h1>Revenue</h1>
          <AreaChart width={350} height={250} data={charts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>

        <div className="chart">
          {/* chart 3 */}
          <h1>Sell </h1>
          <BarChart width={350} height={250} data={charts}>
            <Bar dataKey="sell" fill="#8884d8" />
            <XAxis dataKey="month" />
            <Tooltip />
            <Legend />
          </BarChart>
        </div>
        <div className="chart">
          {/* chart 4 */}
          <h1>Monthly Sell</h1>
          <PieChart width={350} height={250}>
            <Pie
              data={charts}
              dataKey="revenue"
              nameKey="investment"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={charts}
              dataKey="revenue"
              nameKey="investment"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
