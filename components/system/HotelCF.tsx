"use client";
import { HotelCFComponentProps } from "@/types";
import React, { useState } from "react";

interface HotelCFProps extends HotelCFComponentProps {
  updateAmount: (topic: string, value: number) => void; // Prop to update the amount in the parent
}

const HotelCF: React.FC<HotelCFProps> = ({ data, updateAmount }) => {
  // State to track the amount for each topic
  const [amount, setAmount] = useState<{ [key: string]: number }>({});

  // Handle input change for each amount
  const handleAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    detail: { topic: string; ef: number }
  ) => {
    const value = parseFloat(e.target.value) || 0;
    const calculatedValue = detail.ef * value;

    // Update the local amount state
    setAmount((prevAmounts) => ({
      ...prevAmounts,
      [detail.topic]: value,
    }));

    // Call the updateAmount function to update the parent state
    updateAmount(detail.topic, calculatedValue);
  };

  return (
    <div className="container mx-auto p-4">
      {data.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category.topic}</h2>
          {category.details.map((detail, detailIndex) => (
            <div
              key={detailIndex}
              className="grid grid-cols-6 gap-4 mb-2 p-2 bg-white border"
            >
              <div>{detail.topic}</div>
              <input
                value={amount[detail.topic] || ""}
                onChange={(e) => handleAmountChange(e, detail)}
                type="text"
                className="border p-2"
                placeholder="ปริมาณ"
              />
              <div className="border p-2">{detail.storageUnit}</div>
              <div className="border p-2">{detail.ef}</div>
              <div className="border p-2">{detail.unit}</div>
              <div>
                {amount[detail.topic]
                  ? (detail.ef * amount[detail.topic]).toFixed(2)
                  : 0}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HotelCF;
