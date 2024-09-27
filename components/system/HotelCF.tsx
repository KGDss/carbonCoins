"use client";
import { HotelCFComponentProps } from "@/types";
import React, { useEffect, useState } from "react";

const HotelCF: React.FC<HotelCFComponentProps> = ({ data }) => {
  // Use an object to track amounts for each detail
  const [amount, setAmount] = useState<{ [key: string]: number }>({});

  // Handle input change for each amount
  const handleAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    topic: string
  ) => {
    const value = parseFloat(e.target.value) || 0;
    setAmount((prevAmounts) => ({
      ...prevAmounts,
      [topic]: value,
    }));
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
                onChange={(e) => handleAmountChange(e, detail.topic)}
                type="text"
                className="border p-2"
                placeholder="ปริมาณ"
              />
              <div>{detail.storageUnit}</div>
              <div>{detail.ef}</div>
              <div>{detail.unit}</div>
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
