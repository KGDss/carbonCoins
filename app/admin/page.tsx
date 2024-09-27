"use client";
import HotelCF from "@/components/system/HotelCF";
import SideBar from "@/components/system/SideBar";
import { hotelCF } from "@/constants";
import React, { useEffect } from "react";

const AdminPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []); //!make into components!!
  return (
    <div className="flex h-screen">
      <SideBar />
      {/* <div className="flex-1 text-black overflow-y-auto">
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-6 gap-4 mb-2 font-bold text-center bg-background-green p-2 text-white">
            <div>รายการ</div>
            <div>ปริมาณ</div>
            <div>หน่วยการเก็บข้อมูล</div>
            <div>EF</div>
            <div>หน่วย</div>
            <div>CF</div>
          </div>
          <h2 className="text-2xl font-bold mb-6">
            Stationary Combustion (การเผาไหม้แบบอยู่กับที่)
          </h2>

          <div className="grid grid-cols-6 gap-4 mb-2 p-2 bg-white border">
            <div className="text-left">Diesel (Generator)</div>
            <input type="text" className="border p-2" placeholder="ปริมาณ" />
            <span className="border p-2">ลิตร</span>
            <span className="border p-2">2.7078</span>
            <span className="border p-2">kg CO2e/ลิตร</span>
            <input type="text" className="border p-2" placeholder="CF" />
          </div>

          <div className="grid grid-cols-6 gap-4 mb-2 p-2 bg-white border">
            <div className="text-left">Diesel (Fire pump)</div>
            <input type="text" className="border p-2" placeholder="ปริมาณ" />
            <span className="border p-2">ลิตร</span>
            <span className="border p-2">2.7078</span>
            <span className="border p-2">kg CO2e/ลิตร</span>
            <input type="text" className="border p-2" placeholder="CF" />
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-8">
            Mobile Combustion (การเผาไหม้แบบเคลื่อนที่)
          </h2>

          <div className="grid grid-cols-6 gap-4 mb-2 p-2 bg-white border">
            <div className="text-left">
              น้ำมัน Diesel (รถตู้, รถมอเตอร์ไซค์)
            </div>
            <input type="text" className="border p-2" placeholder="ปริมาณ" />
            <span className="border p-2">ลิตร</span>
            <span className="border p-2">2.7406</span>
            <span className="border p-2">kg CO2e/ลิตร</span>
            <input type="text" className="border p-2" placeholder="CF" />
          </div>

          <div className="grid grid-cols-6 gap-4 mb-2 p-2 bg-white border">
            <div className="text-left">น้ำมัน Gasohol 91, E20, E85</div>
            <input type="text" className="border p-2" placeholder="ปริมาณ" />
            <span className="border p-2">ลิตร</span>
            <span className="border p-2">2.2719</span>
            <span className="border p-2">kg CO2e/ลิตร</span>
            <input type="text" className="border p-2" placeholder="CF" />
          </div>

          <div className="grid grid-cols-6 gap-4 mb-2 p-2 bg-white border">
            <div className="text-left">น้ำมัน Gasohol 95</div>
            <input type="text" className="border p-2" placeholder="ปริมาณ" />
            <span className="border p-2">ลิตร</span>
            <span className="border p-2">2.2719</span>
            <span className="border p-2">kg CO2e/ลิตร</span>
            <input type="text" className="border p-2" placeholder="CF" />
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-8">
            Other Sections (สารทำความเย็น, LPG, etc.)
          </h2>
        </div>
      </div> */}
      <div className="flex-1 text-black overflow-y-auto">
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-6 gap-4 mb-2 font-bold text-center bg-background-green p-2 text-white">
            <div>รายการ</div>
            <div>ปริมาณ</div>
            <div>หน่วยการเก็บข้อมูล</div>
            <div>EF</div>
            <div>หน่วย</div>
            <div>CF</div>
          </div>
          <HotelCF data={hotelCF} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
