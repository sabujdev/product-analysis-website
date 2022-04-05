import axios from "axios";
import { useEffect, useState } from "react";

const useChart = () => {
  const [charts, setChart] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((res) => setChart(res.data));
  }, []);
  return [charts, setChart];
};

export default useChart;
