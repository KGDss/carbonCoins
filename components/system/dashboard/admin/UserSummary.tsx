"use client";

import { UserService } from "@/components/services/user";
import React, { useEffect, useState } from "react";
import { truncateAddress } from "../../smartContract/functions";
import { mockUserData } from "@/constants";

const UserSummary = () => {
  const [userData, setUserData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const data = await UserService.getAll(token);
        console.log("User Data:", data);
        setUserData(data.entities || []);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false); // Ensure loading stops even if there's an error
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold text-mid-green">User Summary</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white shadow-lg rounded-2xl mx-8 py-5  mb-5">
          <table className="table-auto w-full border-collapse">
            <thead className="">
              <tr className="text-mid-green">
                <th className="px-4 py-1">ID</th>
                <th className="px-4 py-1">Email</th>
                <th className="px-4 py-1">Wallet Address</th>
                <th className="px-4 py-1">Total Coins</th>
                <th className="px-4 py-1">Used Coins</th>
                <th className="px-4 py-1">Role</th>
              </tr>
            </thead>
            <tbody>
              {mockUserData.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="px-4 py-1">{user.id}</td>
                  <td className="px-4 py-1">{user.email || "N/A"}</td>
                  <td className="px-4 py-1">
                    {user.wallet_address
                      ? truncateAddress(user.wallet_address)
                      : "N/A"}
                  </td>
                  <td className="px-4 py-1">{user.total_coins}</td>
                  <td className="px-4 py-1">{user.used_coins}</td>
                  <td className="px-4 py-1">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserSummary;
