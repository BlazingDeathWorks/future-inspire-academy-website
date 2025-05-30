import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const New_Competition_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="px-20 mb-4 text-3xl font-extrabold leading-tight text-amber-500 lg:text-5xl text-left">
                New Competition: Launching Partnership with Striked
              </h1>
              <div className="mb-4 px-20 text-left text-[#ECB365]">
                Jason Chan | 9/15/23
              </div>
              <div className="flex justify-around">
                <img
                  className="container px-32 w-full max-h-[599px] contain-content"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1694846112968-GMTKS3Y407N8GHGLYF9Y/image-asset.jpeg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                Through browsing other competition and company sponsors, I found an interesting game publishing platform called Striked. Around the same time as when I officially announced Future Inspire Jam #2, I noticed advertisements on various game development discord servers for a game jam hosted by Striked with its bright rocket logo. They were offering a huge prize for their own game jam, so, when I saw them once again as a sponsor of a game engine, I decided to dig a little deeper into how a potential partnership can work between us. I joined their discord server, asked a moderator for directions, and contacted the manager of Striked through direct messages.
              </p>
              <p>
                The Future Inspire Academy website has become a crucial part in my advertisement to sponsors because it directs them to a polished site detailing the mission, services, and accomplishments of our organization. I have received many compliments about my website, further proving its impact in negotiations. Although blogs on the website are always late on updates compared to the instant announcements on the server, they tell sponsors a story about our organization and give them insights into who I am as a founder. The existence of this website makes our organization much more professional, and, as we add new features and pages to our site, we will increase our credibility by just a little more. 
              </p>
              <p>
                Every sponsor is different, and our organization prides itself on creating custom, exclusive sponsorship plans for many of our partners. Our basic model is a simple tradeoff between our promotion of our partner’s products for either funding or a free license to their assets for our winners. We are willing to upgrade to a custom model to further benefit each other’s needs. Typically, our custom plan will include unique ways of promoting their software through events in exchange for more funding and recognition. 
              </p>
              <p>
                For the time being, Striked is partnering with us on a basic model; however, we have already agreed on a custom plan to help develop their platform into a competitor to other game hosting sites. After Striked has finished development, we will be hosting our community game jams exclusively on their platform instead of using itch. Enforcing submissions on their platform will give them more exposure, and, in return, our organization will have a unique game jam site compared to the generic itch site that people are used to seeing. We hope that exposure to Striked will encourage developers to try publishing their future games on their site too. 
              </p>
              <p>
                Currently, our organization believes that Striked can become a competitor by standing out in game jam hosting. If Striked can become a user-friendly platform to create unique game jam sites without the need to code, similar to web design softwares like Webflow or Figma, we believe that Striked can start drawing attention to their platform. From there, the main service to host games can become more popular and they can build new features revolving around supporting their community and building unique portfolios. 
              </p>
              <p>
                Partnering with Striked has brought our organization to new heights as we can grow our mission to not only help students grow in computer science but also promote companies that align with our goals and are helping to make game development easier and more accessible. Not only are we promoting but are now becoming more active contributors to the success of their business products through feedback and feature suggestions. As our community grows, we would be able to accelerate impact to companies as well. 
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default New_Competition_Blog;