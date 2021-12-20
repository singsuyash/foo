import "./ChartBar.css";

const ChartBar = (props) => {
  const value = Math.round(props.value * 100/props.totalValue) + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: value }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
