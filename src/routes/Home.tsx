import React from "react";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import logo from "../../public/logo.svg";

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
              Realize your passion and become the game developer you have always
              wanted to become
            </p>
            <a
              href="https://itch.io/jam/fia-x-umodeler-mega-jam"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-[#E81C6F] focus:ring-4 focus:ring-gray-100 text-white hover:bg-[#064663] dark:focus:ring-gray-800"
            >
              Join Game Jam
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={logo} alt="logo"></img>
          </div>
        </div>
      </section>
      <div className="w-full border-t-2 border-t-amber-500 mt-20 pb-20 bg-[#042232]">
        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-full mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                About Us
              </h2>
              <div className="mt-8 space-y-8 grid grid-cols-2 md:space-y-0 gap-12 w-full max-w-full">
                <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">
                  Future Inspire Academy (FIA) is a non-profit organization,
                  transformed from a high school club, that strives to teach
                  students how to apply their coding skills to game development
                  in a fun and efficient way. Our mission is to create a
                  platform to reward members who start their game development
                  journey early.
                </p>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">
                  We turned to hosting game development competitions, also known
                  as game jams. We realized that our organization can not only
                  impact our global members but also our national and
                  international partners as we help promote their business,
                  improve their products, and promote accessibility.
                </p>
              </div>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center mt-8 px-48">
                From where we began to where we are now, we have expanded our
                goals to create a program that will give opportunities to
                aspiring game developers to enter the game development industry
                easier through grants, training, promotion, and exposure. We are
                aiming to reach greater heights to become an influential
                association—building careers for our members, hosting global
                events alongside massive corporate companies, and researching
                the potential of games beyond entertainment.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full border-t-2 border-t-amber-500">
        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-full mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our Services
              </h2>
              <div className="mt-8 space-y-8 grid grid-cols-3 md:space-y-0 gap-12 w-full max-w-full">
                <div className="text-center">
                  <h2 className="text-3xl mb-4">
                    <mark className="bg-prim text-sec font-extrabold">
                      Daily Unity Challenges
                    </mark>
                  </h2>
                  <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">
                    Participate in daily polls, learn something new about game
                    dev, and build a consistent love for programming!
                  </p>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl mb-4">
                    <mark className="bg-prim text-sec font-extrabold">
                      Weekly Game Creations
                    </mark>
                  </h2>
                  <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">
                    Assignment, art, music, resource links, learning videos,
                    step-by-step guides, source code, development video. Build
                    experience as fast as possible!
                  </p>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl mb-4">
                    <mark className="bg-prim text-sec font-extrabold">
                      Game Dev Mentoring
                    </mark>
                  </h2>
                  <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">
                    Get help on your specific projects either from our community
                    or personally from the founders!
                  </p>
                </div>
              </div>
              <div className="flex justify-center space-y-8 gap-12 mt-8">
                <div className="text-center">
                  <h2 className="text-3xl mb-4">
                    <mark className="bg-prim text-sec font-extrabold">
                      Professional Networking
                    </mark>
                  </h2>
                  <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">
                    Connect with our national and international partners who
                    have years of experience in the game development industry
                    and can help you with anything you need!
                  </p>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl mb-4">
                    <mark className="bg-prim text-sec font-extrabold">
                      Company Collaborations
                    </mark>
                  </h2>
                  <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">
                    Collaborate and partner with our organization to build your
                    vision, promote your business, and develop your platform.
                    Level up your company’s potential by launching unique
                    activities with us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer superColor="#041C32" />
    </>
  );
};

export default Home;
