import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Overscoping_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="px-20 mb-4 text-3xl font-extrabold leading-tight text-amber-500 lg:text-5xl text-left">
                Overscoping: A Much Needed Failure for Success
              </h1>
              <div className="mb-4 px-20 text-left text-[#ECB365]">
                Jason Chan | 7/30/23
              </div>
              <div className="flex justify-around">
                <img
                  className="container px-32 w-full max-w-max min-w-0 max-h-[599px] contain-content overflow-auto"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1690741796635-219KNDKSA8FLYDXOKL5K/image-asset.jpeg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                We are all ambitious people that want to do everything in a short amount of time. As game developers, we always have a new amazing idea in our head every day that we want to create. A lot of us quit though because it gets too tough: we lose motivation, get imposter syndrome, or realize that overscoping our project led to failure. But when you overscope, you learn to redesign your core mechanics and redefine what your project is.  
              </p>
              <p>
                Going back to the Fall of 2022, I remember how my goal was to <strong>teach</strong> people how to apply their coding knowledge that they got from high school to actual computer science careers. I planned to start with three different courses: game development, web development, and machine learning. To make it even more complex, we would have different roles in the organization and we would mandate that every member contributes to the community in a positive way. We would let members pick from either developing blog content or mentoring. I might have been too stubborn to admit, but all of our members back then knew that this wasn’t going anywhere.
              </p>
              <p>
                There just wasn’t any theme to our mission. Not just that but it was absurd to think that I can create a mandatory voice channel meeting on Discord at my convenient time, especially since members are coming from all over the world. There’s something different about teaching online than teaching in person in the way of delegating tasks and communicating to a community. There’s a difference between a school curriculum class and an online course: one is mandatory while the other should be a choice. 
              </p>
              <p>
                Game development is supposed to be hobby that you learn on the side. No one should be forcing you to do anything and we should be having fun developing games and sharing our experiences at our own convenient times. And at the end of the day, it is your choice if you want to pursue your dreams and reach a successful career. What we can only do is provide you with all the resources you need to make that decision yourself. 
              </p>
              <p>
                That’s why our new mission has been to <strong>encourage</strong> people to start early on their careers. While encouragement can include teaching, which we do in our program, we take inspiration from YouTubers and their Discord servers to create a fun learning environment. And, just like any game, we give our design and framework a small twist to bring a reward system for learning, something I feel like everyone has wished for at least once in their educational career. 
              </p>
              <p>
                Now everything we do now and in the future will be for game development and that’s fine because every programmer who has changed the world in different fields of computer science started from making games. We still managed to keep our initial mission, but we’re doing it in a different way. 
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
      {/* <aside
        aria-label="Related articles"
        className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Related articles
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                  className="mb-5 rounded-lg"
                  alt="Image 1"
                ></img>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Our first office</a>
              </h2>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 2 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                  className="mb-5 rounded-lg"
                  alt="Image 2"
                ></img>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Enterprise design tips</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 12 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                  className="mb-5 rounded-lg"
                  alt="Image 3"
                ></img>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">We partnered with Google</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 8 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                  className="mb-5 rounded-lg"
                  alt="Image 4"
                ></img>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Our first project with React</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 4 minutes
              </a>
            </article>
          </div>
        </div>
      </aside> */}
    </>
  );
};

export default Overscoping_Blog;