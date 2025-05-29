import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Identity_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="px-20 mb-4 text-3xl font-extrabold leading-tight text-[#ECB365] lg:mb-6 lg:text-5xl text-left">
                Identity: Rethinking How We Approach Game Jams, Partnerships, and Challenges
              </h1>
              <div className="flex justify-around">
                <img
                  className="container px-32 w-full max-w-max min-w-0 max-h-[599px] contain-content overflow-auto"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1719971878594-KEJ2LJ90LD5DF1PNOGAR/image-asset.jpeg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                After a rough game jam experiment, we want to take a look at what went right, wrong, and what we can do in the future to improve. We launched Future Inspire Jam #5 with high hopes, collaborating with UModeler to host our first exclusive jam with them. The basic gimmick challenged participants to utilize Unity engine specific asset, UModeler X, to create their base 3D models for their game. We believed by creating this exclusive and promoting our competition mainly to UModeler’s discord server and audience, we can regain all of the members we once lost in the hacking incident. It became very clear, however, that we would not be achieving that ambitious goal this time around. Although we understood, from past experiences, that our join count won’t skyrocket until the last couple of days before the competition starts, we found ourselves with significantly less members going into that crucial joining period. As we explore what happens in this article, we will realize that our shortcomings are not a result of partnering with UModeler but almost everything else. If readers just want to know the changes we are planning to make, skip to the bottom with all of the bullet points.
              </p>
              <p>
                As we prepared for this game jam, we reached out to many 3D Unity asset creators to see if any are interested in becoming additional sponsors. We came out of it all with two interested companies. One was willing to partner with us if we are able to acquire Unity’s assistance in providing vouchers. While we are planning to explore that option soon, we focused on the other creator who was willing to immediately contribute. We added Distant Lands, creator of popular asset COZY, to our sponsors list, which allowed us to experiment with a new prize gimmick. 
              </p>
              <p>
                There were a lot of new experiments we integrated into our fifth jam, which is one of the main reasons we fell short of our goals. We restricted participants by forcing them to use Unity to develop their games because UModeler X is only functionable there. We also essentially forced developers to create 3D games, which can be a challenge especially for beginners that typically start their journey in 2D. We failed to properly communicate to UModeler about the jam rules, which led to complications when we received a 2D game in our submissions. If we had known that UModeler X also encourages 2D development, we would not have advocated as much for 3D to the point that making a 2D game for our competition would sound illegal. 
              </p>
              <p>
                Besides the UModeler X exclusive rules, we decided to try a new system that we called Asset Creator Picks. With many of our asset creator sponsors generous enough to donate their assets to this jam, we decided that we would let at least the first place winner have a choice of the assets they wanted to receive. We allowed our first place winner to choose three out of the four possible creator tools to receive. The second place winner would receive the remaining pick. The idea of allowing winners to pick the tools they would like to receive, in a vacuum, is a great idea. However, it can add enormous complexity to a game jam that is already complex enough with exclusive rules and a point system that rewards winners that are loyal members of our server. While our prize provides encouragement to many participants, above all, developers are looking to have fun while creating small portfolio pieces that they can receive feedback on. For that reason, our community voting system experiment also collapsed. 
              </p>
              <p>
                In our previous game jam, we had huge success with a community voting period. We had opened our voting up to the public and encouraged members to provide feedback to other games by promising a $25 prize for the best community voted game. However, this $25 prize was only promised if we were able to reach 400 jam ratings. After receiving over 600 ratings on that game jam, we thought we could replicate the success by repeating the process in the next jam. The only thing we changed was guaranteeing the $25 prize for the best community voted game upfront, without a rating goal. The intention of making the community voting period public to allow anyone to vote was to encourage people to promote Future Inspire Academy as an organization, not necessarily to seek a fourth winner in the fairest way possible. We believed that $25 would be a neat incentive to promote this advocation, but we never thought that participants would make it a competitive environment, pointing fingers, and fighting for a prize that was only meant to be an added bonus for fun. We started this community voting prize out of inspiration from other game jams, and because it performed well last time, we thought the concept was good. Unfortunately, we didn’t realize that no matter how small, adding any type of financial benefits is going to be at risk of community scrutiny, competition, and toxicity. 
              </p>
              <p>
                Some participants expressed their concerns that the voting period was manipulated. Although we tried to explain to them how we intended public voting to go, they continued to insist that the voting was rigged. At the end of the competition and investigation, we found no sort of unfair advantage by participants and the voting period results were natural. We understand, however, why people could be concerned as this jam had a lot less ratings than the previous jam. As a result, each vote can more heavily affect the games. 
              </p>
              <p>
                This story of how the community voting unfolded, created a toxic environment in our server, and ultimately led to the cancellation of the community voting prize, is not to clarify what I believe has already been clarified to the community multiple times. No matter who is in the right or wrong, dissatisfaction of our jam should always call for improvement. As an organization, we strive to host events that our members would enjoy. The concepts and experiments we do are executed to receive a certain reaction or behavior from the community. If it doesn’t work, then we simply need to approach our problems and goals from another angle. 
              </p>
              <p>
                Along with creating complex systems in our competition and prize, we also failed to communicate all these details clearly to our audience. Our descriptions need to become more concise and comprehensive so that developers can more easily skim and understand, starting with our title and promotion technique. Rather than combining our cash prize value and our asset prize value, we are planning to separate them moving forward so that our jam titles are less confusing and misleading. We believe it is okay to combine the first, second, and third place cash prizes and label them as our prize value on our title; in fact, that is the marketing convention of most cash prize game jams to promote clicks but remain tolerable for the community. However, we believe adding our Unity Asset tools as part of the prize value can cause more people to believe that they can win more than they actually can. We still believe that these asset tools are valuable and wanted, however, we don’t want our members to feel cheated if we pretended that some of what seems to be the cash value is actually not cash but a chosen software. By writing our titles like “$X Prize Value + Assets,” we create more clarity for our competition, maintain our credibility, and can potentially drive more joins. 
              </p>
              <p>
                To boost the clarity of our jam overall, we want to start dabbling into custom CSS for custom game jam pages. Because our game jams hold a lot of details relating to rules, prizes, and sponsors, we believe that creating dropdowns, specifically, will benefit us and allow our members to search for their questions and answers faster. Additionally, we believe that custom jam websites can become a unique selling point or at the very least an attractive factor to join our game jams if we are able to create different ones each time.
              </p>
              <p>
                Before we list the changes that we want to make for future jams, I want to at least publicly release our game jam stats this time around. Although we can consider this jam to be statistically our worse performance, the good news is that we always improve no matter what happens. We gained around 30 members, recorded 59 jam joins, 9 submissions (5 true submissions), 49 ratings, and over 3000 views on our jam page. For a jam that may have seemed underwhelming, in reality, we have still performed better than many game jams. While we sit here today critiquing our management, we remain excited and appreciative of the support the game development community gives us that many jams still are hoping to achieve. 
              </p>
              <p>
                After covering the past chaotic month, we finally want to quickly list the changes we are planning to make for jams in the future. There are always going to be exceptions for each rule, but we want to establish guidelines and remind ourselves of this comprehensive list that will point us in the right direction for making more successful game jams. The reasons for making these changes, for the most part, have been explained above. 
              </p>
              <p>
                First, no restriction game jams in terms of game engine or other tools. This rule, obviously, cannot always happen if we plan on continuing to host exclusive game jams with companies. However, we have a solution for this in another one of our changes below. 
              </p>
              <p>
                Second, separate the cash and asset prize pool in jam titles and promotions by using the template “$X Prize Pool + Assets.”
              </p>
              <p>
                Third, remove the point-to-upgrade system from game jams. We do not want to get rid of our point system entirely and discard what symbolizes our members’ loyalty, but we would like to rework our point system and find a better purpose for it. The gimmick itself takes a while to explain and can be a push factor. Additionally, we want our winners to win more. We will figure out a new way to reward loyalty in our program, and we hope to find an answer later this year. 
              </p>
              <p>
                Fourth, remove cash prize for best community voted game. In the future, we may add back the prize; but for now, we will keep it less competitive and toxic. It’ll just be for honorable mentions. At most, we may look into awarding one of our partner’s assets to the best community voted team.
              </p>
              <p>
                Fifth, bring back rating goals for community voting and promise extra cash to the first place jam team if achieved. We still believe that we can make community voting valuable for promoting our organization so long as we keep it relatively non-competitive.
              </p>
              <p>
                Sixth, introduce sponsor side-quests. Many big game jams add their sponsor’s exclusive jam requirements as a sort of “side quest,” where those requirements can become optional to be eligible for better prizes. While we cannot promise to create these side quests for every exclusive jam we do—because it depends on our partnership deal—we will certainly try at every possible opportunity. We will obviously prioritize the majority of the cash prize toward the side quest, but we will leave some for those who would like to still compete in our competition without restriction. In this way, we can promote our partners with a more attractive prize but allow casual members to still participate if they are willing to compete in a potentially more competitive bracket. 
              </p>
              <p>
                Seventh, better, custom game jam pages using itch.io CSS editor.
              </p>
              <p>
                And finally, a multi-round jam system. For some game jams that we are planning in the future, we think that it could be difficult to learn our partner’s tool in just one week. However, as we saw in this last jam, we understand that not everyone would like to commit their time to a game jam game for a month. We believe that by hosting multiple jams, featuring the same sponsor in the span of a month, we can allow our members to better learn the tool and “redeem” themselves after every week with a fresh start. 
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default Identity_Blog;