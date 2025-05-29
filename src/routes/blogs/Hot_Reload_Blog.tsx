import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Hot_Reload_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="px-20 mb-4 text-3xl font-extrabold leading-tight text-[#ECB365] lg:mb-6 lg:text-5xl text-left">
                New Market: Partnering with Hot Reload
              </h1>
              <div className="flex justify-around">
                <img
                  className="container px-32"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1694845187074-86DFVQIW163HIUTXDCU0/image-asset.jpeg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                After coming back from a summer trip and talking to a community of game developers, a friend of mine suggested that I try to seek sponsorships from a new type of market. At the time, FIA only partnered with Rosebud AI and sought partnerships from other game development companies that related to programming. What I didn’t realize was that there was a huge untapped market that would love to sponsor my game jams for promotion of their products: I am referring to the Unity Asset Store. The Unity Asset Store sells all the tools developers will need to create successful games in Unity. From art, sound, frameworks, and development tools, the Asset Store sells something for any type of developer. As Asset Creators constantly need developers to buy their asset and make a profit, FIA can provide promotional services in exchange for free copies of their asset to gift to winners of our community game jams. 
              </p>
              <p>
                My friend’s original suggestion was to target smaller creators that aren’t popular and barely have customers because they would be the most willing to gift one free copy in exchange for potentially dozens of customers. But as I considered the idea, I realized that that plan would only benefit one side and not the other. Future Inspire Academy wants to support companies that we believe can impact a greater game development community. We also want our community to get excited about our new partnerships, and, in this case, we want them to get excited about our new prizes. We know that game developers will be very excited to receive free copies of well known, popular assets from reputable creators, so we decided that, although it’s very ambitious, we would target the most popular tools in the Unity Asset Store. 
              </p>
              <p>
                For the majority of our partnerships, we would like to target creators that have built dynamic tools that can be used in almost any project rather than assets that may only be used in a certain project. While art and sound assets might only be used if they match the certain game, tools that overall allow for a better development experience, regardless of game genre and size, would be more valuable to us programmers. Like I have previously mentioned, we also want to partner with reputable companies, so we have filtered our selection to popular assets that tend to either be on the front pages of the store or featured in the majority of discount events. Because I knew that Hot Reload had just recently left beta and is gaining massive popularity, I decided to reach out to them.
              </p>
              <p>
                Hot Reload by Naughty Cult Studio allows developers to instantly apply code changes, without compiling. They process scripting compilations almost instantly, allowing developers to quickly switch from coding to play-mode without waiting seconds in between. Along with providing FIA with a voucher for the winner of game jams, they are generously awarding all participants extended free trials to their tool. Hot Reload already gives a 30-day free trial, but all participants that submit a qualified game to any future competition will be eligible to receive an extended trial. 
              </p>
              <p>
                As a Unity Verified Asset, Hot Reload has opened the gates for Future Inspire Academy to extend our impact to a new market. As we expand our organization, we learn about new ways we can help companies and the community around us. Credibility and achievements for our organization will prove meaningful in the long run and we are excited to be taking this next step.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default Hot_Reload_Blog;