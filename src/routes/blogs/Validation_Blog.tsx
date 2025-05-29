import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Validation_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="px-20 mb-4 text-3xl font-extrabold leading-tight text-[#ECB365] lg:mb-6 lg:text-5xl text-left">
                Validation: Partnership with UModeler
              </h1>
              <div className="flex justify-around">
                <img
                  className="container px-32 w-full max-w-max min-w-0 max-h-[599px] contain-content overflow-auto"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1694905399872-6C3NJHQPGP38W9LSXRED/image-asset.jpeg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                After our first partnership with a Unity Verified Asset creator, we realized the importance of reputable partners that can provide validation and credibility for our organization. Until very recently with all the drama revolving around Unity, we wanted to receive support from a group of Unity Verified Asset creators that will one day lead to a long-term partnership with Unity. We believed that gaining support from a community of developers who Unity is in close contact with would allow us a chance to rise to the next level. This article will first highlight the importance of UModeler and afterwards discuss how current events have shifted our plans.
              </p>
              <p>
                UModeler is a Unity Verified Asset and a past top asset that allow developers to model 3D objects right in Unity, similar to if Blender or Maya were a package in Unity. We have agreed to a basic sponsorship model, promoting their tool in exchange for vouchers for the winners. I have also agreed to advertise their open beta tool, UModeler X, and dedicate a channel to discussing suggestions and feedback. We have also discussed plans to potentially host exclusive game jam events in the future to promote their products further. 
              </p>
              <p>
                These past months have made our organization expand our mission to not only help our members but our partners too. Although I will discuss my thoughts about Unity’s situation in a future blog post, my current concern is on the effects on my partners that are tied to Unity. Unity’s tarnished reputation has now driven hundreds of developers away from their platform, searching for new game engines to continue their career. This doesn’t just hurt Unity but the Unity asset creators because they might have a substantially fewer number of customers in a couple of months. If Unity follows their current path, they are likely to fall in the next couple of years, displacing all the Unity Assets and the hard work creators have put in. 
              </p>
              <p>
                Part of our organization’s mission is to develop our partners’ businesses. As the organization carefully plans our next moves, we will also help our partners stay relevant in the game development community. Our organization is very confident in our ability to keep our partnerships together no matter the obstacles we face now or in the future. We love the Unity game engine and would do everything to continue development on their software, but, for now, we are watching carefully and making the appropriate preparations to cover every possible situation. 
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default Validation_Blog;