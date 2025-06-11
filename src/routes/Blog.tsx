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
          <div className="mr-auto place-self-center lg:col-span-5 px-0 sm:px-12 sm:flex-none flex flex-col">
            <h1 className="max-w-2xl mb-5 text-3xl sm:text-4xl sm:text-left text-center font-extrabold tracking-tight leading-none text-[#ECB365]">
              Overscoping: A Much Needed Failure for Success
            </h1>
            <p className="max-w-2xl mb-4 font-light lg:mb-8 md:text-lg lg:text-xl text-[#ECB365] sm:text-left text-center">
              We are all ambitious people that want to do everything in a short
              amount of time.
            </p>
            <a
              href="/blog/overscoping-blog"
              className="sm:px-1 inline-flex items-start justify-center sm:justify-start py-3 mr-3 text-base font-medium text-left text-amber-500 rounded-lg bg-primary-700 hover:bg-primary-800"
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
            <h2 className="text-2xl tracking-tight font-extrabold dark:text-white">
              Stories
            </h2>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
            <BlogThumbnail
              route="/blog/decisions-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1723995705712-JTZGL9OTXQ81HO91F7OR/unsplash-image-FanDtJGxREM.jpg?format=2500w"
              title="Decisions: Choosing the Right Partners and Approach to Collaboration "
              description="While our summer jams were not the most successful competitions, we learned quite a bit about how we would like to approach future jams."
            />
            <BlogThumbnail
              route="/blog/identity-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1719971933114-J9PLITACQSHVMOTV1LNY/image-asset.jpeg?format=2500w"
              title="Identity: Rethinking How We Approach Game Jams, Partnerships, and Challenges"
              description="After a rough game jam experiment, we want to take a look at what went right, wrong, and what we can do in the future to improve."
            />
            <BlogThumbnail
              route="/blog/rebuild-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1714291080602-417UM3USI9OBZFI5B2KG/image-asset.jpeg?format=2500w"
              title="Rebuild: Working Through Challenges"
              description="Over the past 4 months, we have faced many unexpected challenges that has halted our progress and ability to provide to the community, but we are persevering to revive our program and bring it back to where it once was."
            />
            <BlogThumbnail
              route="/blog/reflection-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1702528811630-871EOUWCRBTYP51VSBQU/image-asset.jpeg?format=2500w"
              title="Reflection: Taking a Step Back to Regroup"
              description="After expediting the growth of the organization in the past couple of months, we’re taking a step back to catch our breaths, analyze some mistakes, and plan new services for next year."
            />
            <BlogThumbnail
              route="/blog/third-jam-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1698556254965-4ODQWR6UOW3PFQMG2YH4/image-asset.jpeg?format=2500w"
              title="Prove: Our Grand Push for Future Inspire Jam #3"
              description="We’ve gathered and united our sponsors together over the past month and we’re ready to prove to the world what we are capable of as a non-profit organization."
            />
            <BlogThumbnail
              route="/blog/free-play-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1695496581663-SN3P5EUEGWAIOB8RZNSD/image-asset.jpeg?format=2500w"
              title="Free Play: Why Second Game Jam was a Success"
              description="Our organization took a chance at unrestricted game jams with teams, and it worked!"
            />
            <BlogThumbnail
              route="/blog/validation-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1694905530372-96RGJG7MRTQZTGXSYX74/image-asset.jpeg?format=2500w"
              title="Validation: Partnership with UModeler"
              description="After our first partnership with a Unity Verified Asset creator, we realized the importance of reputable partners that can provide validation and credibility for our organization."
            />
            <BlogThumbnail
              route="/blog/new-competition-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1694846144866-GWE9DEIBQ3R4TQ2XE3HM/image-asset.jpeg?format=2500w"
              title="New Competition: Launching Partnership with Striked"
              description="Through browsing other competition and company sponsors, I found an interesting game publishing platform called Striked."
            />
            <BlogThumbnail
              route="/blog/hot-reload-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1694845236465-9OFU3V5KR47507DQ16KR/image-asset.jpeg?format=2500w"
              title="New Market: Partnering with Hot Reload"
              description="After coming back from a summer trip and talking to a community of game developers, a friend of mine suggested that I try to seek sponsorships from a new type of market."
            />
            <BlogThumbnail
              route="/blog/fundraising-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1694840079870-QD43D1EINW6MGS2J4109/image-asset.jpeg?format=2500w"
              title="Fundraising: Selling Boba with Happy Lemon"
              description="About a month ago, I received an email from a local boba store offering to help fund my high school club."
            />
            <BlogThumbnail
              route="/blog/itch-dev-log-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1694757874791-FGGOMNWWTKISHI6NSXXN/image-asset.jpeg?format=2500w"
              title="Consistency: How to Make Popular Devlogs on Itch"
              description="Devlogs are essential for indie game developers to showcase their progress, engage with the community, and attract potential players and collaborators."
            />
            <BlogThumbnail
              route="/blog/insufficient-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1693676881971-D76PB3BIZCJBGTDT6WKJ/image-asset.jpeg?format=2500w"
              title="Insufficient: Why One-on-One Mentoring is Bad"
              description="One-on-One Mentoring might not be as effective as you think for game development."
            />
            <BlogThumbnail
              route="/blog/second-game-jam-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1693639250039-V82SFMJT8OJ01EEP352N/image-asset.jpeg?format=2500w"
              title="Prize vs Limitation: Second Game Jam"
              description="For our second game jam, we are once again sponsored by Rosebud AI with their PixelVibe and Gamemaker AI platforms, but, this time, we’re hosting to test a theory."
            />
            <BlogThumbnail
              route="/blog/aligned-goals-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1693624396593-5HGMIGO8AWRE9SIM9E52/image-asset.jpeg?format=2500w"
              title="Aligned Goals: Partnership with Rosebud AI"
              description="After the end of the first Future Inspire Jam, FIA and Rosebud agreed on a long-term partnership to grow and improve each other."
            />
            <BlogThumbnail
              route="/blog/beginning-blog"
              img="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1693624206936-57LL7JUMVBU4OIR661BS/image-asset.jpeg?format=2500w"
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
