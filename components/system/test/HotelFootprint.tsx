"use client";
import HotelFootprintTemplate from "@/components/system/test/HotelFootprintTemplate";
import { hotelCF } from "@/constants";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HotelFootprint = () => {
  const [amount, setAmount] = useState<{ [key: string]: number }>({});

  const updateAmount = (topic: string, value: number) => {
    setAmount((prevAmounts) => ({
      ...prevAmounts,
      [topic]: value,
    }));
  };

  const totalSum = Object.keys(amount).reduce((sum, key) => {
    return sum + amount[key];
  }, 0);

  const chartData = {
    labels: ["สรุปปริมาณคาร์บอนฟุตพริ้นท์ (tCO2e)"],
    datasets: [
      {
        label: "Total CF (tCO2e)",
        data: [(totalSum / 1000).toFixed(2)],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-6 gap-4 mb-2 font-bold text-center bg-background-green p-2 text-white">
        <div>รายการ</div>
        <div>ปริมาณ</div>
        <div>หน่วยการเก็บข้อมูล</div>
        <div>EF</div>
        <div>หน่วย</div>
        <div>CF</div>
      </div>
      <HotelFootprintTemplate data={hotelCF} updateAmount={updateAmount} />

      <div className="mt-8">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="mt-8 text-2xl font-bold">
        Total CF: {(totalSum / 1000).toFixed(2)} tCO2e
      </div>
    </div>
  );
};

export default HotelFootprint;
