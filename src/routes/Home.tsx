import React from "react";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import logo from "../../public/logo.png";

const Home: React.FC = () => {
  return (
    <>
      <Navbar superColor="#041C32" />
      <section className="bg-[#041C32]">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-8 font-extrabold tracking-tight leading-none text-5xl dark:text-white">
              Dream Game Development
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Realize your passion and become the game developer you have always wanted to become
            </p>
            <a
              href="https://itch.io/jam/fia-x-umodeler-mega-jam"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-[#E81C6F] focus:ring-4 focus:ring-gray-100 text-white hover:bg-[#064663] dark:focus:ring-gray-800"
            >
              Join Game Jam
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={logo}
              alt="logo"
            ></img>
          </div>
        </div>
      </section>
      <div className="w-full border-t-2 border-t-amber-500 mt-20">
        Hello World
      </div>
      <Footer superColor="#041C32" />
    </>
  );
};

export default Home;