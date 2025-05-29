import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Reflection_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="px-20 mb-4 text-3xl font-extrabold leading-tight text-amber-500 lg:text-5xl text-left">
                Rebuild: Working Through Challenges
              </h1>
              <div className="mb-4 px-20 text-left text-[#ECB365]">
                Jason Chan | 4/28/24
              </div>
              <div className="flex justify-around">
                <img
                  className="container px-32 w-full max-w-max min-w-0 max-h-[599px] contain-content overflow-auto"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1714291047018-C7KMX7UT4AVB6RXPA3JR/image-asset.jpeg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                Over the past 4 months, we have faced many unexpected challenges that has halted our progress and ability to provide to the community, but we are persevering to revive our program and bring it back to where it once was. At the end of December, we realized that my Discord account was compromised, and our moderator permissions were disabled. This made controlling our server impossible, as we feared any action taken immediately could be responded by the hacker with harm to our members. We decided to remain passive for at least a month while trying to regain the account by contacting Discord. Unfortunately, Discord support could not help us in a timely manner; as a result, my account was later deleted, and we now sit with an ownerless server. 
              </p>
              <p>
                This event had a huge impact on our organization, community, and overall productivity. We are very disappointed that many of our activities and new services we had planned earlier in the year had to be put on hold because we neglected security and integrity, and for that, FIA would like to apologize. However, we believe that this is all part of creating a successful organization, program, and business. We learned more about the potential threats on the internet and the types of people we can and most definitely will encounter in the future. While there are many people supporting our journey, we realized that there will also be those that want to take away the opportunity and success our non-profit can create. Being aware of this reality is crucial for us moving forward because we will now always keep security and progress on the same page.
              </p>
              <p>
                One of the most impacted areas in FIA was our sponsors. Currently, we are not receiving funding from Rosebud or Striked. Although we plan to return to a new sponsorship plan with Striked later this week, we are unsure when we will engage in conversations with Rosebud again. After FIA became Rosebud’s primary game jam organizer, their AI platform and community skyrocketed, and we could not be prouder of not only what they have accomplished but of the impact FIA might have brought to them in the past year. However, as Rosebud is now a platform quickly stabilizing and self-sustaining, it is clear that FIA would have to offer a different type of benefit to Rosebud than we provided before. After we reaffirm our identity and decide on our path moving forward, we can plan to work with one of our proud sponsors again. 
              </p>
              <p>
                While assessing the hacking situation and coming to the realization that Discord will most likely struggle to assist, the organization planned our path to move forward. We created a new server to continue our existing services and begin hosting game jams again. We launched our first game jam of 2024 in March with the goal of regaining our members, credibility, and momentum that we had prior to the hacking. We reached out to new Unity Asset creators and brought sponsors, Pixel Crushers and Kubacho Lab, on board. While only 21 entries were submitted to the jam, we found other positive analytics that reinvigorated us far past the joins and submissions. 
              </p>
              <p>
                FIA tried a new marketing tactic to increase the traffic on our jam page, engage the game development community, and increase our member count. We decided to add a $25, no point gimmick, prize pool for the best community voted game to excite our participants and encourage them to spread the word about our jam. While our goal was to hit 400 jam ratings, we ended with 604 public ratings. Even more shocking, our jam page received over 4500 visits during the time period of the actual event. This means that we gave our sponsors and our organization plenty of exposure just from a single community jam. 
              </p>
              <p>
                We believe we are two or three game jams away from fully recovering, and we hope we can get back to full productivity in the fall. Our priority at the moment is to continue pushing out game jams and finding new partnerships that can help financially support our organization and our future plans. If we believe our old server is truly unrecoverable, we will make our alternative server the main sometime in winter. 
              </p>
              <p>
                We cannot express how grateful FIA is for our community and sponsors’ support even throughout our biggest challenges. We hope that our program can continue to be of use to our members and grow into what we believe it is capable of becoming. We look to post updates about our new sponsor plans and potentially a huge step into new technology…  
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default Reflection_Blog;