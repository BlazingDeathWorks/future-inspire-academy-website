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
                Reflection: Taking a Step Back to Regroup
              </h1>
              <div className="flex justify-around">
                <img
                  className="container px-32 w-full max-w-max min-w-0 max-h-[599px] contain-content overflow-auto"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1702435382758-Y8A3B1MMJG9WUGN68TH9/image-asset.jpeg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                After expediting the growth of the organization in the past couple of months, we’re taking a step back to catch our breaths, analyze some mistakes, and plan new services for next year. Sponsorships are also at a halt at the moment, and we won’t be gaining much funding for the rest of the year, so we are carefully planning our next move. You can say that the game jam theme was not the only thing “not going according to plan.” School restrictions prevent us from easily hosting fundraisers for extra funds and a busy personal schedule prevented me from pitching to some important companies that I now can lose opportunities to connect with. It’s not just a busy schedule but an obvious burnout from doing so much in the past months, gathering sponsors and completely reframing our program in ways I would have never imagined prior to this summer. In this post, we’ll conclude our final thoughts about the third game jam and talk about everything that’s upcoming for Future Inspire Academy. 
              </p>
              <p>
                Like predicted, Future Inspire Jam #3 ended with 22 additional joins and 2 additional submissions compared to the previous jam. Our submission count could have been higher, but we disqualified some games, and many people couldn’t finish their game because of major bugs. Nonetheless, these statistics that are most apparent to the game jam’s success shows only minor growth. It doesn’t tell the full story though. Our server was livelier than ever, and we gained nearly double the usual member growth from jams, at one point hitting 260 members from an initial 160. This massive improvement alone is reason enough to justify another long investment in marketing. From a community perspective, we blew up, and that’s all we can ask for.
              </p>
              <p>
                Going into future game jams, we will probably mix up prizes, rules, and time limits to see what works and what doesn’t. A change I might make in the future includes allowing members on the same team to combine their points for upgrades and distribute the entire prize pool to a designated “team leader” who can manage distributing the cash prize to the rest of their team. This reduces the complexity to distribute prizes and gives more control to the individual winning teams. Additionally, I will very likely add disclaimers to future jams regarding international teams. This is my first time distributing cash prizes to people outside of the US, and I’ve already come across lots of obstacles trying to transfer money to other countries. It’s not just difficult to transfer money, but there’s a lot of international conversion fees that are attached to the service that our organization won’t be able to cover for every single month. Transferring with a bill might be an option, but that can take longer. Our disclaimer in future jams might state that the prize pool might be deducted to cover international fees and alternative prizes may be considered. We still want people from all around the world to participate in our game jams, so we’ll continue to figure out what’s the best way to compensate and satisfy our winners. These ideas can change and are definitely open to change. But talking to one international game jam winner got me thinking of a new initiative that can be possible in our program.
              </p>
              <p>
                Not everyone has the luxury to buy the most powerful computer to create games and make their dreams come true. This not only slows down production in obvious ways but also can restrict the game engine they use. They might have to compromise for other engines that their computer can handle; not that those engines are not great options, but they can certainly hinder potential and people’s desire to go in another direction. That’s why virtual desktops can be a very powerful service for low-income families and other people who need to jump-start their careers but don’t have the funds to do so. This is a very ambitious goal to accomplish, but I believe that our organization can work to achieve this after gathering a few more key sponsors to back us for credibility. 
              </p>
              <p>
                December, although is a time for FIA to reorganize, it’s also a time for us to prepare for bigger projects to launch in the beginning months of next year. We’re not only going to bring more quality weeklies but we’re also working on putting together an educational YouTube channel. Behind the scenes, we’re also planning to rework the aesthetics of our website to make it into a website not just for our sponsors to look at but for new members to get excited about what we do. We’re also planning to launch development of community games, commercial-quality games that we’ll let our members build to represent our community. Depending on my personal schedule, these ideas might come sooner or later. 
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