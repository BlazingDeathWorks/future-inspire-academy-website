import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Free_Play_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="px-20 mb-4 text-3xl font-extrabold leading-tight text-amber-500 lg:text-5xl text-left">
                Free Play: Why Second Game Jam was a Success
              </h1>
              <div className="flex justify-around">
                <img
                  className="container px-32 w-full max-w-max min-w-0 max-h-[599px] contain-content overflow-auto"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1695495467166-UL8B0UCR7BGO00VGU6JP/image-asset.jpeg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                Our organization took a chance at unrestricted game jams with teams, and it worked! As mentioned in a previous blog, instead of a game jam restricting software and collaboration, we decided to unlock both but with a smaller prize pool. In this post, we will go over struggles, expectations vs reality, and takeaways from this competition.
              </p>
              <p>
                When preparing the game jam, we had to decide how we would want to combine our budget prize pool with our point system to continue to align with our goals to reward loyal members that win. The calculations and decisions were harder because we had to take into account teams and ensure that each member can receive an equal prize but still have upgrade potential. We decided to make two different rules depending on if the winner was on a team or not. A solo developer gets the benefit of having the potential to upgrade all the way to the budget, but we tried to keep the point to cash conversion the same for individuals whether they were on a team or not. For future game jams, we’ll approach calculations in the same way but accounting for a bigger prize pool.
              </p>
              <p>
                Because we were on a budget prize pool for this game jam, we initially believed that less people would join our competition; after all, we only received 30 joins with one week left when we hit over 60 at this time with our first jam. But our second game jam outperformed our first in every way: 107 joins, 25 submissions, and 64 ratings to 89 joins, 16 submissions, 59 ratings. In the last week, especially towards the end, we saw an explosion in joins out of nowhere. It was strange at first, because I wasn’t advertising on discord…I only sent a daily post on the itch community channel. I soon realized that itch played a huge role in the amount of joins because of the hundreds of developers looking for the next game jam to join every day. In addition, as the launch date came closer, our jam became more visible to other people in the “Upcoming Game Jam” filter. Combined with my daily community post that had gather hundreds of views and was always on top of the forum, developers flooded into not just our jam page but our server. 
              </p>
              <p>
                Going forward, we will try to keep game jams unrestricted in software and optional for teams. However, we would also like to promote our sponsors’ products by creating exclusive competitions that highlight their tools, so, for those cases, we would need to limit the software. For future jams, we will add a “Terms and Policies” section onto our page to receive permission to use any game submissions as promotion in videos we make. In the future, we would also like to allow game builds other than web and windows (i.e. MacOS, Linux, Mobile, etc.). From our experiment, we realized that including these two main factors (freedom and teams) increased the engagement of our events. To increase the engagement even more, we will add a bigger prize value and multiple winners. Multiple winners would attract more developers because it’ll give hope to more developers that they have a chance at winning some pocket cash. We can easily achieve this with our group of new sponsors that we have reached out to in the past month. In addition, partnering with Unity Asset Store creators gives participants a variety of unique prizes that will help them in their game development journey. 
              </p>
              <p>
                Our organization will continue to seek interesting partners that will get our community excited. We will also look for new ways to engage our community by taking inspiration from other game development servers. We always have to stay on our tows, especially after game jams, because we want to keep our members engaged with our program. As we host more game jams and find ourselves in the same situation over and over, I am confident we can find ways to push past our adversities and reach for greater heights. We are excited to kick off our biggest game jam soon.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default Free_Play_Blog;