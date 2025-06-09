import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Aligned_Goals_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="sm:px-20 mb-4 text-3xl font-extrabold leading-tight text-amber-500 lg:text-5xl text-left">
                Aligned Goals: Partnership with Rosebud AI
              </h1>
              <div className="mb-4 sm:px-20 text-left text-[#ECB365]">
                Jason Chan | 9/1/23
              </div>
              <div className="flex justify-around">
                <img
                  className="container sm:px-32 w-full sm:max-h-[599px] contain-content"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1693624396593-5HGMIGO8AWRE9SIM9E52/image-asset.jpeg?format=2500w"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto sm:text-left text-center sm:px-16 text-white">
              <p>
                After the end of the first Future Inspire Jam, FIA and Rosebud agreed on a long-term partnership to grow and improve each other. 
                Both of us want to make game development accessible for everyone and in a fun and efficient way. 
                For FIA, this meant that we can secure sustainable funds for our game jams, attract game developers of all skill level, and grow our community. 
                With more members in our server to back our credibility, we allow ourselves the opportunity to reach out to other companies to secure more funding in the future. 
              </p>
              <p>
                For Rosebud, this meant that they can continue to receive constructive feedback on their beta platform, PixelVibe, and get more exposure to their company as a whole. 
                To bring our partnership to the next level and bring more impact to Rosebud AI, we are planning to allow exclusive access to their beta platform, Gamemaker AI, to our server soon. 
                Having exclusive access to various platforms will add a new benefit to joining our program and also gives Rosebud the proper feedback they need to improve their software and eventually sell their product to game developers. 
              </p>
              <p>
                Rosebud AI has many tools outside of PixelVibe and Gamemaker AI, all of them aiming to assist in the game development process in different ways. 
                For example, their NPC Generative AI is dedicated to creating NPC behavior and dialogue for games, so the developers can focus on more important tasks. 
              </p>
              <p>
                After looking at the progress of Gamemaker AI, at it’s current iteration, I see it as a tool similar to the Scratch game engine where absolute beginners and young elementary school students can begin diving into the realm of making games. 
                By interacting with Gamemaker AI’s chatbot, beginners can create very simple games that will teach the very basics of coding, game design, and the game development process. 
              </p>
              <p>
                It should be targeted towards people who don’t know very much about game development because this type of audience will be more likely to overlook game engine limitations in the form of gameplay and aesthetics. 
                In elementary school, students dive into computer science by exploring sites like Scratch and Hour of Code that teaches them the basics with block coding. 
                Students at this age will be satisfied with creating a Flappy Bird remake and wouldn’t compare their work to games they play in their spare time. 
              </p>
              <p>
                Everything stated above, although we are in a partnership, was not asked by Rosebud to promote their products. 
                I personally wanted to talk about the various interesting platforms my sponsor has to offer and review the potential of Gamemaker AI. 
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default Aligned_Goals_Blog;