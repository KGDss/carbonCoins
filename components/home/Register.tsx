"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AuthService } from "../services/auth";
import { RegisterDto } from "../models/auth";
import CustomButton from "../CustomButton";
import { toast, Toaster } from "sonner";

const Register = ({ toggleRegister }: { toggleRegister: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
  });
  const handleClick = () => {
    toggleRegister();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      username: !username,
      email: !email,
      password: !password,
    };

    setErrors(newErrors);

    if (!newErrors.username && !newErrors.email && !newErrors.password) {
      await handleRegister({ username, password, email });
    }
  };

  const handleRegister = async ({ username, password, email }: RegisterDto) => {
    const res = await AuthService.register({ username, password, email });
    if (res) toggleRegister();
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
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      width="100px"
                      placeholder="Username:"
                      className={`bg-inherit border-b-2 ${
                        errors.username
                          ? "border-red-500 placeholder:text-red-500"
                          : "border-text-gray"
                      } text-text-gray placeholder:text-text-gray w-88`}
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      width="100px"
                      placeholder="Email:"
                      className={`bg-inherit border-b-2 ${
                        errors.email ? "border-red-500" : "border-text-gray"
                      } text-text-gray placeholder:text-text-gray w-88`}
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      width="4em"
                      placeholder="Password:"
                      className={`bg-inherit border-b-2 ${
                        errors.password ? "border-red-500" : "border-text-gray"
                      } text-text-gray placeholder:text-text-gray w-88`}
                    />
                    <CustomButton
                      title="Sign Up"
                      containerStyles="bg-mid-green text-white w-full h-full z-40 p-1"
                      btnType="submit"
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
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
