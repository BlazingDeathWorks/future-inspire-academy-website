import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Insufficient_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="px-20 mb-4 text-3xl font-extrabold leading-tight text-amber-500 lg:text-5xl text-left">
                Fundraising: Selling Boba with Happy Lemon
              </h1>
              <div className="mb-4 px-20 text-left text-[#ECB365]">
                Jason Chan | 9/15/23
              </div>
              <div className="flex justify-around">
                <img
                  className="container px-32 w-full max-w-max min-w-0 max-h-[599px] contain-content overflow-auto"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1694840050760-RRNULVKBVCH58HN7B89J/image-asset.jpeg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                About a month ago, I received an email from a local boba store offering to help fund my high school club. Happy Lemon is a boba store that has over 1000 stores located around the world and a couple that are located near me. One reason why I started FIA was to reach a greater community of game developers rather than settling for a very small group in my high school. Because I have integrated my organization in my high school club, in other words all high school club members become members of the organization, I quickly reached out to Happy Lemon to accept their request but redirected the receiver to not be the president of my Game Development club but the founder of Future Inspire Academy. 
              </p>
              <p>
                Currently, I am signing forms with my school administrators to allow my fundraisers to take place after school on campus. After school on either Mondays or Fridays, I will pre-order boba from Happy Lemon with a discount, pick it up from their store, and sell the drinks at my school at the price of my choosing. Depending on the discount, I am planning to receive one to two dollars of profit per drink. 
              </p>
              <p>
                The biggest difficulty that comes with fundraising is deciding how many drinks to buy. On one hand, I won’t want to sell out immediately after opening up shop. But on the other hand, I want to sell nearly all my drinks in order to make a profit. This is why, for the first event, I will reduce the number of drinks I buy and will gradually increase the number as I gauge the number of customers I get. Although it might be a shame to close up shop early, that is a better result than having 20 leftover drinks. In the case of negative profit, other sponsors will be able to keep me financially secured and stable. 
              </p>
              <p>
                Until my fundraiser becomes majorly successful, I am planning to only sell three of the most popular drinks on the menu. I believe that starting a fundraiser at my high school not only helps a local business and my own organization but will overall be a fun experience. 
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default Insufficient_Blog;