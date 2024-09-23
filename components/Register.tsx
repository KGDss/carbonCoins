"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AuthService } from "./services/auth";
import { RegisterDto } from "./models/auth";

const Register = ({ toggleRegister }: { toggleRegister: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleClick = () => {
    toggleRegister();
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleRegister({ username, password, email });
  };

  const handleRegister = async ({ username, password, email }: RegisterDto) => {
    await AuthService.register({ username, password, email });
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
                    onSubmit={handleSubmit}
                  >
                    <input
                      id="input"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      width="100px"
                      placeholder="Username:"
                      className="bg-inherit border-b-2 border-text-gray text-text-gray placeholder:text-text-gray w-88"
                    />
                    <input
                      id="input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      width="100px"
                      placeholder="Email:"
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
                    <button type="submit">Sign Up</button>
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
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
