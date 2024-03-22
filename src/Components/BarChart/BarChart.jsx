import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";



export default function BarChartData({ chartData }) {
  const data = Object.entries(chartData).map(([key, value]) => ({ name: key, value }));
  return (

    <div >
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          // right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="value" fill="#8884d8" barSize={70} />
      </BarChart>
    </div>
  );
}
