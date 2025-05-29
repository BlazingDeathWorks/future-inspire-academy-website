import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Insufficient_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="px-20 mb-4 text-3xl font-extrabold leading-tight text-[#ECB365] lg:mb-6 lg:text-5xl text-left">
                Insufficient: Why One-on-One Mentoring is Bad
              </h1>
              <div className="flex justify-around">
                <img
                  className="container px-32"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1693676911046-EYIQTPLF3DA72E9B6STK/image-asset.jpeg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                One-on-One Mentoring might not be as effective as you think for game development. In the past, our non-profit mentored aspiring game developers, and we found that, a lot of the times, the results are no different from before we mentored them: no motivation that leads to no progress. This is because they expect the mentor to teach them all they need to know to build their games instead of watching tutorials on YouTube since they fear that they’d get stuck in what we like to call “tutorial hell.” The regular way of mentoring people makes them reliant on the mentor and doesn’t help motivate them to learn and improve themselves. Our non-profit organization is here to remind them that the results come from their efforts, not the mentor’s. What mentoring should be, for game development, is creating a curated plan that’ll guide them to becoming a self-taught and independent developer. They can ask you for advice, but they should be the one to take initiative for their own goals.
              </p>
              <p>
                In FIA, we offer a reframed mentoring program that allows clients to get more out of their time. When we are recruiting new members who are looking to get mentored, we usually advise them to take advantage of our other activities in the program because those activities force them to get hands-on with Unity instead of relying on someone else. If people do ask for mentoring, we analyze their skill level and recommend them YouTube channels and videos to start improving their coding skills. Our successful tutees are the ones that only contact us occasionally to get clarification on concepts or get an in depth review of their source code. They understand that we can only encourage them by providing a guide that will lead the way to success and it is their choice whether they want to put in the hours to learn. 
              </p>
              <p>
                We recommend developers to work on a hobby project in parallel to learning new concepts. Having a hobby project not only allows us to put our teachings into practice but it makes us analyze our own code as we get better and better. We’ll start to identify problems in our past code and realize solutions that will make it cleaner and more reusable. That’s why hate for your previous work is not a bad thing because that gives you the opportunity to realize and correct your mistakes so you will be more productive and successful on your next attempt. 
              </p>
              <p>
                Mentoring in our organization will no longer be your typical live tutorial. We won’t guide you through your entire project, but, instead, we’ll point you in the right direction to learn more about Unity and programming based on your current skill level. We’ll locate a starting point for you so that you can continue to learn interesting things about game development every day and level up as fast as possible.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default Insufficient_Blog;