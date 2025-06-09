import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Beginning_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="sm:px-20 mb-4 text-3xl font-extrabold leading-tight text-amber-500 lg:text-5xl text-left">
                New Beginning: Game Jams
              </h1>
              <div className="mb-4 sm:px-20 text-left text-[#ECB365]">
                Jason Chan | 9/1/23
              </div>
              <div className="flex justify-around">
                <img
                  className="container sm:px-32 w-full sm:max-h-[599px] contain-content"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1693624206936-57LL7JUMVBU4OIR661BS/image-asset.jpeg?format=2500w"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto sm:text-left text-center sm:px-16 text-white">
              <p>
                Before the beginning of summer, we had a vision to engage the game development community and accomplish something no one else can: earn through learning.
                We wanted to reward game developers who engaged with our platform and took advantage of the resources provided to chase their dreams of becoming game developers.
                We didn’t think there was enough incentive to collect points in our server and simply view it on our leaderboard… But what if we turned it into a type of currency? 
              </p>
              <p>
                We decided that, at it’s core, points can be converted into real cash.
                But our concept has to be more complex than that because we don’t have millions of dollars lying around to gift all of our members: we need funding.
                For companies to have a reason to fund us, we decided that we can leverage game jams to market for our sponsors and give exposure to their platform as a benefit in a two-way partnership to secure prize funds.
                We scoured the internet and searched for any companies who were willing to help small organizations like us get started with hosting game jams with prizes.
                At the end of it all, we found Rosebud AI.
              </p>
              <p>
                With Rosebud AI sponsoring us with their platform, PixelVibe, we were able to agree on a $300 prize pool for our June game jam.
                Our goal at the time was simple, get as many people to join our game jam to secure a long-term partnership with Rosebud and get as many people to join our non-profit program’s discord server.
                We had only 40 members in our program before reaching out to Rosebud and we barely had an active server. 
              </p>
              <p>
                After the jam, we had 112 members, 89 joins, and 16 submissions.
                Rosebud AI opened the gateway for us to new opportunities with other companies and gave Future Inspire Academy a new reputation.
                With this, we can go up to other companies and promote our member count, our sponsor, and our successful game jam.
                Being able to claim that our server has over one hundred members has proven to be extremely impactful in our pitches to other companies now. 
              </p>
              <p>
                Our first game jam is just the beginning to realizing our vision and our program’s full potential. 
                This moment in our non-profit organization’s history, will be marked as the launch to greater impact in the future.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default Beginning_Blog;