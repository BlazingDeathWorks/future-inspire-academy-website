import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Third_Jam_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="px-20 mb-4 text-3xl font-extrabold leading-tight text-amber-500 lg:text-5xl text-left">
                Prove: Our Grand Push for Future Inspire Jam #3
              </h1>
              <div className="flex justify-around">
                <img
                  className="container px-32 w-full max-w-max min-w-0 max-h-[599px] contain-content overflow-auto"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1698556222513-U7FAN3LOZX1XOX7M106Z/image-asset.jpeg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                We’ve gathered and united our sponsors together over the past month and we’re ready to prove to the world what we are capable of as a non-profit organization. Our goal for this next game jam is to continue to grow in our members, hit a new record for our game jam joins and submissions, and remain consistent in our analytics to help us reach more sponsors in November. With two more days to go before the launch, we have a good prediction for of our success, and we’ve gained much knowledge from many unexpected results.
              </p>
              <p>
                Rather than announcing our game jam two weeks in advance, we decided to see what would happen if we started advertising a month before. We wondered if we can double the amount of joins in our jam and server by simply doubling our marketing efforts. Even though we have a bigger prize pool and more views on our itch post, the results show that our success is relatively the same as the previous jam. What I am pleased to see in our analytics is our consistent ability to gain 60+ members for every hosted game jam. From 40 members, we went to 100; 100 to 160; and now, 160 to 220. 
              </p>
              <p>
                We were sold on the idea that a prize value of three times our first game jam will attract a mass amount of people, but we realized that gaining members isn’t as simple as throwing in more money (though the majority of our prize value comes from our Unity assets). When looking at successful game jams, like Score Space or Lv. 99, we realized the superior benefits that they offered to developers, which were much more attractive than cash. 
              </p>
              <p>
                Why do people participate in game jams? To develop their skill, learn from others, collaborate, engage in the community, earn prizes, gain experience, and many more. But at the core of all the reasons, game developers participate to turn their hobby into a career, to turn their dream into a reality, and to one day become a successful game developer. Therefore, the best game jams (besides community jams hosted by reputable content creators and companies) offer opportunities to accelerate a developer’s potential to reach greater heights. This opportunity can be the selling point, the specialty, the gimmick, and the hook to a game jam to make it more attractive. 
              </p>
              <p>
                The simplest but most effective prize to give a game developer is more exposure to their game and their studio/brand, which helps their reputation and future potential. Score Space becomes a semi-publisher and helps develop and polish the winning games, advertising through streamers and prize competition within those games, not the jam itself. Lv. 99 takes exposure to the highest level, offering a huge grant to the winners and flying them to Singapore to showcase their game in an Esports event. My mind exploded simply hearing this and realized the enormous impact it can give to anyone else first hearing about such an opportunity. 
              </p>
              <p>
                The results from our third game jam show that, in order for us to surpass our limits and reach heights greater than our current consistent numbers, we must change our framework and identity once again. We realized that we can become successful by creating game jams with prizes, but now we see a vision where a better prize is not more cash but rather more opportunity. As we gain more sponsors in November, we’re going to look for our new hook to help game developers all around the world. I can see FIA jams becoming a combination of the two mentioned competitions in the future, so that’s what we’ll aim to be for now: a semi-publisher capable of accelerating game developers’ potential through grants, training, and exposure. 
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default Third_Jam_Blog;