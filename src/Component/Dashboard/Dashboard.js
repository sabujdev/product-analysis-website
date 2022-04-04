import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";
const data = [
  { name: "March", sales: 400, Price: 2600, total: 444444 },
  { name: "April", sales: 300, Price: 2200 },
  { name: "June", sales: 500, Price: 2000 },
  { name: "July", sales: 200, Price: 1800 },
  { name: "August", sales: 300, Price: 2660 },
  { name: "September", sales: 300, Price: 3400 },
];
const data2 = [
  { name: "March", amount: 5060, pv: 2400 },
  { name: "April", amount: 3050, pv: 2400 },
  { name: "June", amount: 300, pv: 2400 },
  { name: "July", amount: 2800, pv: 2400 },
  { name: "August", amount: 700, pv: 2400 },
  { name: "September", amount: 100, pv: 2400 },
];
const Dashboard = () => {
  return (
    <section className="chart_container">
      <div className="sell">
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="sales" fill="#8884d8" barSize={30} />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        </BarChart>
        <h4>Sell</h4>
      </div>

      <div className="investment">
        <LineChart width={600} height={300} data={data2}>
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" stroke="#8884d8" />
          <Tooltip />
          <Legend
            width={100}
            wrapperStyle={{
              top: 20,
              right: 10,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "30px",
            }}
          />
        </LineChart>
        <h4>investment</h4>
      </div>
    </section>
  );
};

export default Dashboard;
