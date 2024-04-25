"use client";
import React, { useState } from "react";
import Image from "next/image";

const Login = () => {
  const [name, setName] = useState("");
  return (
    <>
      <div className=" absolute top-0 h-screen w-screen flex justify-center items-center bg-gray-950/30">
        <div className="h-[50vh] w-4/12 top-52 rounded-4xl bg-white z-40">
          <div className="rounded-4xl w-full h-full bg-gradient-to-b from-hover-green/30 relative">
            <Image
              src="/x.svg"
              alt="x"
              width={20}
              height={20}
              priority={true}
              className="absolute right-8 top-8"
            />
            <div>
              <div className="flex flex-col justify-center items-center text-text-gray pt-10">
                <div className="text-5xl font-bold">LOGIN</div>
                <div className="mt-12">
                  <input
                    id="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    width="100px"
                    placeholder="username:"
                    className="bg-inherit border-b-2 border-text-gray text-text-gray placeholder:text-text-gray "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
