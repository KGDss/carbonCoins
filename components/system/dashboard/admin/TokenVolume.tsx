import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const TokenVolume = ({
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

  const allDates = Object.keys(timeSeries).reverse();
  const allVolumes = allDates.map((date) =>
    parseFloat(timeSeries[date]["5. volume"])
  );

  // Default to the last 30 days
  const dates = allDates.slice(-30);
  const volumes = allVolumes.slice(-30);

  // Alternate colors
  const colors = volumes.map(
    (_, index) =>
      index % 2 === 0
        ? "rgba(67, 121, 93, 1)" // Dark green
        : "rgba(152, 196, 84, 1)" // Light green
  );

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Volume",
        data: volumes,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
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

      zoom: {
        pan: {
          enabled: true,
          mode: "x", // Allow panning on the x-axis
        },
        zoom: {
          wheel: {
            enabled: true, // Zoom with mouse wheel
          },
          pinch: {
            enabled: true, // Zoom with pinch gesture
          },
          mode: "x", // Allow zooming on the x-axis
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
          text: "Volume",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: width, height: height }}>
      <Bar ref={chartRef} data={data} options={options as any} />
    </div>
  );
};

export default TokenVolume;
