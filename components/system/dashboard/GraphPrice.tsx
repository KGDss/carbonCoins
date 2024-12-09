import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin
);

const GraphPrice = ({
  timeSeries,
  width,
  height,
}: {
  timeSeries: { [key: string]: any } | null;
  width: string;
  height: string;
}) => {
  const chartRef = useRef(null);

  if (!timeSeries) return <div>Loading chart...</div>;

  const dates = Object.keys(timeSeries).reverse();
  const closingPrices = dates.map((date) =>
    parseFloat(timeSeries[date]["4. close"])
  );

  const createGradient = (ctx: CanvasRenderingContext2D, chartArea: any) => {
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.bottom,
      0,
      chartArea.top
    );
    gradient.addColorStop(0, "rgba(243, 243, 243, 0.1)");
    gradient.addColorStop(1, "rgba(120, 200, 159, 0.5)");
    return gradient;
  };

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Closing Price",
        data: closingPrices,
        borderColor: "rgba(67, 121, 93, 1)",
        backgroundColor: (context: any) =>
          chartRef.current && context.chart
            ? createGradient(context.chart.ctx, context.chart.chartArea)
            : "rgba(67, 121, 93, 0)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Closing Prices Over Time",
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price",
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <div style={{ width: width, height: height }}>
      <div className="flex justify-end mb-2"></div>
      <Line ref={chartRef} data={data} options={options as any} />
    </div>
  );
};

export default GraphPrice;
