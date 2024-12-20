"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { navBarLinks, languages } from "@/constants";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Login, Register } from ".";
// import { useRouter } from "next/navigation";

const NavBar = () => {
  const [selectedLang, SetselectedLang] = useState(languages[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const scrollingEnable = (state: boolean) => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.style.overflow = state ? "visible" : "hidden";
    } else {
      console.error("HTML element not found");
    }
  };

  const toggelMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    scrollingEnable(isMenuOpen);
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
    scrollingEnable(isLogin);
  };

  const toggleRegister = () => {
    setIsRegister(!isRegister);
    scrollingEnable(isRegister);
  };

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.1,
      },
    },
  };

  return (
    <>
      <div>
        {isLogin && (
          <motion.div
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.5, scale: 0.1 }}
            transition={{ duration: 0.2 }}
          >
            <Login toggleLogin={toggleLogin} />{" "}
          </motion.div>
        )}
      </div>

      <div>
        {isRegister && (
          <motion.div
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.5, scale: 0.1 }}
            transition={{ duration: 0.2 }}
          >
            <Register toggleRegister={toggleRegister} />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            //have mobile-navbar here
            className="text-xs sm:text-sm md:text-base fixed overflow-y-hidden flex flex-col bg-gray-950/80 items-center lg:hidden h-screen w-screen z-20 "
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <div className="mt-5 text-xl text-hover-green">Menu</div>
            {navBarLinks.map((link) => (
              <div
                key={link.title}
                className="py-4 hover:text-hover-green"
                onClick={toggelMenu}
              >
                <h3>
                  <Link key={link.title} href={`#${link.id}`}>
                    {link.title}
                  </Link>
                </h3>
              </div>
            ))}
            <div className="lg:pl-2 xl:pl-3 2xl:pl-4 pt-4">
              <h3>
                <Link
                  href="/"
                  className="hover:text-hover-green"
                  onClick={toggleLogin}
                >
                  LOGIN{" "}
                </Link>
                |
                <Link
                  href="/"
                  className="hover:text-hover-green"
                  onClick={toggleRegister}
                >
                  {" "}
                  REGISTER
                </Link>
              </h3>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <header className="flex justify-between">
        <div
          id="home"
          className="w-5 sm:w-4/12 md:w-fit flex justify-center items-end min-w-48"
        >
          <Image
            src="/sideBar/logoName.svg"
            alt="logoname"
            width={300}
            height={20}
            priority={true}
            className="pl-3 sm:pl-4 md:pl-5 pt-5"
          />
        </div>
        <nav className="hidden lg:flex justify-center items-end -mr-1">
          {navBarLinks.map((link) => (
            <div
              key={link.title}
              className="text-base lg:pr-8 xl:pr-11 2xl:pr-14 hover:text-hover-green"
            >
              <h3>
                <Link key={link.title} href={`#${link.id}`}>
                  <span>{link.title}</span>
                </Link>
              </h3>
            </div>
          ))}
          <div className="text-base lg:pl-2 xl:pl-3 2xl:pl-4">
            <h3>
              <Link
                href="/"
                className="hover:text-hover-green"
                onClick={toggleLogin}
              >
                LOGIN{" "}
              </Link>
              |
              <Link
                href="/"
                className="hover:text-hover-green"
                onClick={toggleRegister}
              >
                {" "}
                REGISTER
              </Link>
            </h3>
          </div>
        </nav>
        <div className={`flex justify-center items-end pr-5 sm:pr-9 md:pr-12`}>
          <div className="border-solid border rounded-3xl pr-3 pl-4 py-1 ">
            <Listbox value={selectedLang} onChange={SetselectedLang}>
              <div className="relative w-fit z-10">
                <Listbox.Button className=" flex justify-between items-center">
                  <span className="text-xs sm:text-sm md:text-base">
                    {selectedLang.lang}
                  </span>
                  <Image
                    src="/landing/chevron-up-down.svg"
                    width={20}
                    height={20}
                    className="object-contain block"
                    alt="chevron up down"
                  />
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opactiy-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="text-xs sm:text-sm md:text-base absolute mt-1 ">
                    {languages.map((language) => (
                      <Listbox.Option
                        key={language.id}
                        value={language}
                        as={Fragment}
                      >
                        {({ active }) => (
                          <li
                            className={`relative cursor-default select-none py-2  ${
                              active ? "text-white" : "text-mid-green"
                            }`}
                          >
                            {language.lang}
                          </li>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className={`lg:hidden pl-5 ${isMenuOpen ? "hidden" : ""}`}>
            <AnimatePresence>
              <motion.button
                className="text-white"
                whileTap={{ scale: 0.97 }}
                onClick={toggelMenu}
              >
                <svg
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </motion.button>
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
