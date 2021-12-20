import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPoints = [
    { label: "Jan", value: 0.0 },
    { label: "Feb", value: 0.0 },
    { label: "Mar", value: 0.0 },
    { label: "Apr", value: 0.0 },
    { label: "May", value: 0.0 },
    { label: "Jun", value: 0.0 },
    { label: "Jul", value: 0.0 },
    { label: "Aug", value: 0.0 },
    { label: "Sep", value: 0.0 },
    { label: "Oct", value: 0.0 },
    { label: "Nov", value: 0.0 },
    { label: "Dec", value: 0.0 },
  ];

  const totalValue = props.dataPoints
    .map((e) => e.amount)
    .reduce((prev, curr) => prev + curr);

  props.dataPoints.map(e => {
      dataPoints[e.date.getMonth()].value += e.amount;
  });

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          totalValue={totalValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
