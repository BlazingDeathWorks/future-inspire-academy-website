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
            <h1 className="max-w-2xl mb-8 font-extrabold tracking-tight leading-none md:text-6xl text-3xl dark:text-white">
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
              <h2 className="mb-8 text-5xl tracking-tight font-extrabold dark:text-white">
                About Us
              </h2>
              <div className="mt-8 space-y-8 md:grid grid-cols-2 md:space-y-0 gap-12 w-full max-w-full">
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
              <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center mt-8 md:px-48">
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
        <section className="bg-back">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-full mb-8 lg:mb-16">
              <h2 className="mb-8 text-5xl tracking-tight font-extrabold dark:text-white">
                Our Services
              </h2>
              <div className="mt-8 space-y-8 md:grid grid-cols-3 md:space-y-0 gap-12 w-full max-w-full">
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
              <div className="md:flex justify-center space-y-8 gap-12 mt-8">
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
      <div className="w-full border-t-2 border-t-amber-500 pb-20 bg-[#042232] py-8">
        <h2 className="text-5xl text-center tracking-tight font-extrabold mb-8 py-8">
          Sponsors
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center px-4 2xl:px-[580px]">
          “We enjoyed collaborating with FIA during our game jam, where 16
          fantastic games were created using Rosebud’s AI asset generation tool.
          We wish FIA all the best on their journey ahead!”
        </p>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center px-4 2xl:px-[580px]">
          -Rosebud AI
        </p>
        <div>
          <section className="">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <dl className="grid max-w-screen-lg mx-auto sm:grid-cols-5 dark:text-white">
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    $6000+
                  </dt>
                  <dd className="font-light text-gray-500 dark:text-gray-400 sm:mb-0 mb-4">
                    raised
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    550+
                  </dt>
                  <dd className="font-light text-gray-500 dark:text-gray-400 sm:mb-0 mb-4">
                    joins
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    100+
                  </dt>
                  <dd className="font-light text-gray-500 dark:text-gray-400 sm:mb-0 mb-4">
                    submissions
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    25000+
                  </dt>
                  <dd className="font-light text-gray-500 dark:text-gray-400 sm:mb-0 mb-4">
                    visits
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    10+
                  </dt>
                  <dd className="font-light text-gray-500 dark:text-gray-400 sm:mb-0 mb-4">
                    collaborations
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
        <div className="flex justify-center">
          <a href="https://unity.umodeler.com/">
            <img
              className="min-w-0 max-h-44 contain-content py-8 px-8"
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/cb858679-3635-4f2b-b2bd-7fc0c39eeba8/um1_color_1.png"
              alt=""
            ></img>
          </a>
        </div>
        <div className="flex justify-center">
          <a href="https://kronnect.com/">
            <img
              className="min-w-0 max-h-52 contain-content py-8 px-8"
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/63bf2ca5-e9bb-4358-9b5b-780907ecfe2b/kronnect.png"
              alt=""
            ></img>
          </a>
        </div>
        <div className="flex justify-center">
          <a href="https://striked.gg/">
            <img
              className="min-w-0 max-h-52 contain-content px-8"
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/bbea16e3-eee6-4071-9861-ad942e45a27e/Logo_white.png"
              alt=""
            ></img>
          </a>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-x-24 mt-8">
          <a href="https://rosebud.ai/">
            <img
              className="max-w-max min-w-0 max-h-52 md:max-h-64 contain-content"
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/66e5bcfd-a40f-4c01-b050-dae08573148d/rosebudailogo.png"
              alt=""
            ></img>
          </a>
          <a href="https://hotreload.net/">
            <img
              className="max-w-max min-w-0 max-h-52 md:max-h-64 contain-content"
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/72bbb7f2-fc3e-4bb9-8c46-f9d348f194ca/Logo_HotReload+%28White%29.png"
              alt=""
            ></img>
          </a>
        </div>
        <div className="flex justify-center items-center flex-col">
          <a href="https://assetstore.unity.com/publishers/80066">
            <img
              className="min-w-0 max-h-48 contain-content px-8"
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/9ecd7958-8d91-4038-bb2f-071231bb9352/logotype%5B7694%5D.png"
              alt=""
            ></img>
          </a>
          <a href="https://www.pixelcrushers.com/">
            <img
              className="min-w-0 max-h-48 contain-content px-8"
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/2f0f5d05-13d6-4171-976f-810b566bac71/PixelCrushers_2ColorLogo_White%5B7669%5D.png"
              alt=""
            ></img>
          </a>
          <div className="flex justify-center gap-0 md:gap-14 mt-8 mx-8 sm:mx-0">
            <a href="https://bewilderedstudios.com/">
              <img
                className="min-w-0 max-h-48 contain-content"
                src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/0849c5d3-f758-4645-b661-143f62a2c850/bewildered_studios_logo-no_background-large.png"
                alt=""
              ></img>
            </a>
            <a href="https://distantlands.wixsite.com/distantlands">
              <img
                className="min-w-0 max-h-48 contain-content"
                src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/495184b7-fad8-4bdf-b6ed-f5fa104ea482/Distant+Lands+Logo.png"
                alt=""
              ></img>
            </a>
          </div>
        </div>
      </div>
      <Footer superColor="#041C32" />
    </>
  );
};

export default Home;
