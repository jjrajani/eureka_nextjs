import { PieChart } from "react-minimal-pie-chart";
import MealPlannerContext from "components/organisms/MealMastery/context";
import { useContext } from "react";

interface MacroPieChartProps {}

const MacroPieChart = ({}: MacroPieChartProps) => {
  const { results = { macro: { protein: 0, carbs: 0, fats: 0 } } } = useContext(
    MealPlannerContext
  );

  const lineWidth = 100;
  const radius = 50;
  const isLV = typeof window === "undefined" ? 1200 : window.innerWidth >= 1024;

  return (
    <PieChart
      style={{
        fontFamily: '"ASAP", -apple-system, Helvetica, Arial, sans-serif',
        fontSize: "6px",
        maxWidth: "160px",
        maxHeight: "160px",
      }}
      data={[
        {
          title: "Protein",
          label: () => "Protein",
          value: results.macro.protein,
          color: "#c81246",
        },
        {
          title: "Carbs",
          label: () => "Carbs",
          value: results.macro.carbs,
          color: "#8bbd44",
        },
        {
          title: "Fats",
          label: () => "Fats",
          value: results.macro.fats,
          color: "#f9b938",
        },
      ]}
      radius={radius}
      lineWidth={lineWidth}
      label={(renderProps) => {
        return (
          <>
            <text
              dominantBaseline="central"
              x={renderProps.x}
              y={renderProps.y - 6}
              dx={renderProps.dx}
              dy={renderProps.dy}
              textAnchor="middle"
              style={renderProps.style}
            >
              {renderProps.dataEntry.title}
            </text>
            <text
              dominantBaseline="central"
              x={renderProps.x}
              y={renderProps.y + (isLV ? 6 : 5)}
              dx={renderProps.dx}
              dy={renderProps.dy}
              textAnchor="middle"
              style={renderProps.style}
            >
              {renderProps.dataEntry.value * 100}%
            </text>
          </>
        );
      }}
      labelPosition={100 - lineWidth / 2}
      labelStyle={{
        fill: "#fff",
        fontWeight: "600",
        fontSize: "10px",
        opacity: 0.85,
        pointerEvents: "none",
      }}
    />
  );
};

export default MacroPieChart;
