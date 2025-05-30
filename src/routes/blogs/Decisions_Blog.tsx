import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Decisions_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="px-20 mb-4 text-3xl font-extrabold leading-tight text-amber-500 lg:text-5xl text-left">
                Decisions: Choosing the Right Partners and Approach to Collaboration
              </h1>
              <div className="mb-4 px-20 text-left text-[#ECB365]">
                Jason Chan | 8/18/24
              </div>
              <div className="flex justify-around">
                <img
                  className="container px-32 w-full max-h-[599px] contain-content"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1723995652610-ZYNLFBORQAWJFNGORUF2/unsplash-image-FanDtJGxREM.jpg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                While our summer jams were not the most successful competitions, we learned quite a bit about how we would like to approach future jams. We hosted three jams in a short amount of time in the summer. Our first jam was a UModeler exclusive; our second was a three-day, self-sponsored jam; and our third was a Yahaha exclusive. And for each jam we hosted, we received fewer and fewer joins and submissions to the point where it is safe to say that these are our all time lows that break the consistency of the results we used to produce. 
              </p>
              <p>
                The UModeler jam was not bad by any means, but it did not reach the same high results as jams prior to it. We still had joins, submissions, and site views; however, they were a lot less than expected. As explained in our previous blog, we have learned a lot from this jam and plan to start implementing our new side-quest system into our competitions. 
              </p>
              <p>
                Our three-day, $25 prize pool jam was hosted after a couple of weeks. We thought that a small jam would help us gain more members while budgeting our funds. But as the days went by leading up to the jam, we realized that we were going to hit numbers lower than we have ever seen before. That jam ended with 11 joins, 3 submissions, and 5 ratings, even when we tried implementing a rating goal system. From this, we learned that the majority of our community would rather participate in a week long jam than a three-day jam. There is a minority in our server that were requesting this jam, so it was a little frustrating to see those that requested not participate. As we took input from members after the competition, we were told that many had summer plans that prevented them from being able to make a game for us. And it might be just that—that summer jams can’t work unless if we already have a large following, a huge prize, or an established jam series going. 
              </p>
              <p>
                Just one week after our three-day jam ended, we decided to collaborate with Yahaha for an exclusive in which participants would be required to use their game engine to create a horror game in three days. There were a lot of red flags during the preparation phase that we were concerned about, such as the large amount of requirements to qualify and the specific game elements that had to be in each game. In the back of our heads, we knew it would be a challenge for any person to jump into Yahaha and create a game in three days that adheres to everything our sponsor wanted in the game. But we wanted this to work because we were low on funds and a successful jam can revitalize it to a stable space. So in a way, we were desperate—picking a sponsor that can financially help us but not considering the fit. We were punished for our mistake with our all-time lowest performance jam: 8 joins, 3 submissions that none qualified for, and only a couple hundred site views. 
              </p>
              <p>
                This was our first year hosting jams in the summer and we learned while failing. Not all companies are going to work for us, and instead of being desperate, I need to work harder to find partners who want and can support us in the direction we want to go towards. As of right now, we are taking a small break from game jams as too many in a short span is not great. I also need to adjust to college life before I proceed with big events again. One thing is for sure: we will not let these bad performances define our organization. Instead, we’ll internalize these experiences and move on to our next jam. 
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default Decisions_Blog;