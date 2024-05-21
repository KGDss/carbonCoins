"use client";
import React, { useState } from "react";
import Image from "next/image";

const Register = ({ toggleRegister }: { toggleRegister: () => void }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    toggleRegister();
  };
  return (
    <>
      <div className=" absolute top-0 h-screen w-screen flex justify-center items-center bg-gray-950/30">
        <div className="h-[50vh] w-4/12 top-52 rounded-4xl bg-white z-40">
          <div className="rounded-4xl w-full h-full bg-gradient-to-b from-hover-green/30 relative overflow-hidden">
            <Image
              src="/x.svg"
              alt="x"
              width={15}
              height={20}
              priority={true}
              className="absolute right-10 top-10"
              onClick={handleClick}
            />
            <div>
              <div className="flex flex-col justify-center items-center text-text-gray pt-10">
                <div className="text-5xl font-bold">Register</div>
                <div className="mt-12">
                  <form
                    action="submit"
                    className="flex flex-col justify-center items-center gap-8"
                  >
                    <input
                      id="input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      width="100px"
                      placeholder="Username:"
                      className="bg-inherit border-b-2 border-text-gray text-text-gray placeholder:text-text-gray w-88"
                    />
                    <input
                      id="input"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      width="100px"
                      placeholder="Password:"
                      className="bg-inherit border-b-2 border-text-gray text-text-gray placeholder:text-text-gray w-88"
                    />
                  </form>
                </div>
              </div>
            </div>
            <Image
              src="/trees.svg"
              alt="trees"
              width={10000}
              height={10000}
              priority={true}
              className="absolute -bottom-1"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
