import React from "react";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import BlogThumbnail from "../components/BlogThumbnail.tsx";

const Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#041C32" />
      {/* Featured Blog Section */}
      <section className="bg-[#041C32]">
        <div className="grid max-w-screen-xl px-10 py-7 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1690741796635-219KNDKSA8FLYDXOKL5K/image-asset.jpeg"
              alt=""
              className=""
            ></img>
          </div>
          <div className="mr-auto place-self-center lg:col-span-5 px-12">
            <h1 className="max-w-2xl mb-5 text-4xl font-extrabold tracking-tight leading-none text-[#ECB365]">
              Overscoping: A Much Needed Failure for Success
            </h1>
            <p className="max-w-2xl mb-4 font-light lg:mb-8 md:text-lg lg:text-xl text-[#ECB365]">
              We are all ambitious people that want to do everything in a short
              amount of time.
            </p>
            <a
              href="/blog/overscoping-blog"
              className="px-1 inline-flex items-start justify-start py-3 mr-3 text-base font-medium text-left text-amber-500 rounded-lg bg-primary-700 hover:bg-primary-800"
            >
              Read more
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* Stories Section */}
      <section className="bg-[#041C32]">
        <div className=" px-4 mx-auto max-w-screen-xl">
          <div className="max-w-screen-sm text-left mb-8">
            <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Stories
            </h2>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
            <BlogThumbnail
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1694840079870-QD43D1EINW6MGS2J4109/image-asset.jpeg?format=2500w"
              title="Fundraising: Selling Boba with Happy Lemon"
              description="About a month ago, I received an email from a local boba store offering to help fund my high school club."
            />
            <BlogThumbnail
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1694757874791-FGGOMNWWTKISHI6NSXXN/image-asset.jpeg?format=2500w"
              title="Consistency: How to Make Popular Devlogs on Itch"
              description="Devlogs are essential for indie game developers to showcase their progress, engage with the community, and attract potential players and collaborators."
            />
            <BlogThumbnail
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1693676881971-D76PB3BIZCJBGTDT6WKJ/image-asset.jpeg?format=2500w"
              title="Insufficient: Why One-on-One Mentoring is Bad"
              description="One-on-One Mentoring might not be as effective as you think for game development."
            />
            <BlogThumbnail
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1693639250039-V82SFMJT8OJ01EEP352N/image-asset.jpeg?format=2500w"
              title="Prize vs Limitation: Second Game Jam"
              description="For our second game jam, we are once again sponsored by Rosebud AI with their PixelVibe and Gamemaker AI platforms, but, this time, we’re hosting to test a theory."
            />
            <BlogThumbnail
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1693624396593-5HGMIGO8AWRE9SIM9E52/image-asset.jpeg?format=2500w"
              title="Aligned Goals: Partnership with Rosebud AI"
              description="After the end of the first Future Inspire Jam, FIA and Rosebud agreed on a long-term partnership to grow and improve each other."
            />
            <BlogThumbnail
              src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1693624206936-57LL7JUMVBU4OIR661BS/image-asset.jpeg?format=2500w"
              title="New Beginning: Game Jams"
              description="Before the beginning of summer, we had a vision to engage the game development community and accomplish something no one else can: earn through learning."
            />
          </div>
        </div>
      </section>
      <Footer superColor="#041C32" />
    </>
  );
};

export default Blog;
