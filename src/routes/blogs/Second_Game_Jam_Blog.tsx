import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Second_Game_Jam_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="px-20 mb-4 text-3xl font-extrabold leading-tight text-amber-500 lg:text-5xl text-left">
                Prize vs Limitation: Second Game Jam
              </h1>
              <div className="mb-4 px-20 text-left text-[#ECB365]">
                Jason Chan | 9/1/23
              </div>
              <div className="flex justify-around">
                <img
                  className="container px-32 w-full max-w-max min-w-0 max-h-[599px] contain-content overflow-auto"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1693639201565-NFB7RHG2AG2ZUUYWJIM8/image-asset.jpeg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                For our second game jam, we are once again sponsored by Rosebud AI with their PixelVibe and Gamemaker AI platforms, but, this time, we’re hosting to test a theory. Our first game jam can be considered a success considering it was the first time we were hosting such an event, but there was a huge gap between joins and submissions: 89 joins to 16 submissions. 
              </p>
              <p>
                According to a small poll in our server, one of the major reasons why we saw such an inconsistency was because of the art limitation that indirectly limited the game’s capabilities. In order to get a lot of funds from Rosebud, we conditioned games to only use PixelVibe to AI generate art assets. There is a second option that we are allowed to do in our partnership though: simply shoutout Rosebud’s platforms. 
              </p>
              <p>
                This doesn’t give us nearly as much money to work with for game jams, but it allows every participant to innovate at their full potential. By the end of our second game jam, our goal is to find out how we can close the gap between joins and submissions. We are also testing the difference in success between a game jam that has a big prize with lots of limitation and a game jam that has a small prize with no limitations. 
              </p>
              <p>
                Besides our main difference being the smaller prize value and no software limitations, our game jam will allow teams. Another push factor from our first game jam was the fact that people couldn’t form teams. Game development is a hobby that becomes more fun when we’re working together with our friends. Especially in an event such as a game jam, we want our community to engage with not only our platform but the other members too. 
              </p>
              <p>
                Obviously, the ideal scenario will be to have lots of funds to spend on a game jam with no software limitations, but, before publishing this game jam, we didn’t have that option. Because the prize pool changed from our first being $300 to our second being $50, it’s expected to see a drop in the number of joins; however, that doesn’t mean that our second game jam will be a failure. With over 30 joins, if we are able to get more than 16 submissions, we would have beaten our previous jam. 
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default Second_Game_Jam_Blog;