import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const Itch_Dev_Log_Blog: React.FC = () => {
  return (
    <>
      <Navbar superColor="#04293A"/>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-[#04293A] antialiased">
        <div className="flex justify-center mx-auto max-w-screen-xl ">
          <article className="mx-auto px-16 w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="px-20 mb-4 text-3xl font-extrabold leading-tight text-[#ECB365] lg:mb-6 lg:text-5xl text-left">
                Consistency: How to Make Popular Devlogs on Itch
              </h1>
              <div className="flex justify-around">
                <img
                  className="container px-32"
                  src="https://images.squarespace-cdn.com/content/v1/6464755548734907f7218c40/1694757814911-C0FLR8W237MPCSLXIAWM/image-asset.jpeg"
                  alt=""
                ></img>
              </div>
            </header>
            <div className="max-w-screen-lg mx-auto px-16 text-white">
              <p>
                Devlogs are essential for indie game developers to showcase their progress, engage with the community, and attract potential players and collaborators. Itch is one of the most popular platforms to publish games and gain visibility within the game dev community. For developers who want to start building their popularity for their hobby game, the Devlog forum is a great place to start, especially for beginners. In this article, the Devlog forum I am referring to is located in the Community tab on top. Over the past year, I have discovered how to consistently make my posts stand out over others. Below is the secret to receiving as much as 200 views in the first two weeks. If you keep it up, you’ll easily reach 1000 views in the first two months. 
              </p>
              <p>
                The secret and the foundation to your post’s success is in the consistency and the ability to stay as the most recent post on the forum. If not the first post, your title must be visible to readers without them scrolling on the page. The reason is obvious. If readers will spend any time on the forum, it will be on the first couple of posts if not the first page. In order to stay on top, you need to be posting on a daily basis or as consistently as your time allows. These are the very basics to creating a popular post, but there’s some tricks you can do on itch that will make your post instantly more attractive to readers.
              </p>
              <p>
                Although you should be posting almost every day, you should only be creating one topic for your game or project. In the top right, there’s a place to make a new topic. I suggest that you tag your topic as “Just Started” because that seems to attractive lots of people in contrast to tagging a percentage. The “New” tag is the most eye-catching tag that will attract more viewers, so it’s important to constantly post. The reason why you should create only one topic and layer posts within that forum space is because the viewer and reply count will continue to increase. As a viewer of devlogs in the community, I know that the biggest factor that will make me click on that post is not the title but the number of views it has. The number of replies or number of posts you create within that topic is also a big factor. Not only do bigger numbers naturally attract us but we are interested in viewing what others believe are worth their time. That’s why many would rather read about a 2000 viewed devlog post with 60 replies than a 30 view post. 
              </p>
              <p>
                Engaging with your audience is crucial to building a supportive community and increasing the popularity of your devlogs. Respond to comments, questions, and feedback promptly and thoughtfully. Show appreciation for those who take the time to engage with your content. Not only does this increase the reply count but it also gives your profile on itch a better reputation when you come off as an approachable developer who loves to interact with their fellow developers. 
              </p>
              <p>
                Make sure to include screenshots, concept art, videos, or gifs that highlight notable advancements in your game development journey. Additionally, sharing behind-the-scenes content such as challenges, inspirations, or sneak peeks into your creative process can help create a stronger bond with your audience. Writing an essay of text is a horrible way to engage your audience. I try to minimize my content with bullet points and instead direct more details to images and gifs. Gifs are a really attractive way to display your new features rather than describing them. It might take more time to create the content, but the quality will be worth it if you are able to consistently execute. In my previous hobby project, I added additional information about my coding architecture and process by adding an image of my whiteboard work instead of trying to construct a research paper on itch about it. 
              </p>
              <p>
                New posts and replies can be very small. Giving quick updates on bug fixes or tiny improvements. These posts are very easy because they typically don’t need any embeds, but they allow your topic to climb back to the top of the Devlog Forum. The idea is to constantly have your post on the front page of the forum for as long as you need it to be there. This is just one simple example to accomplish that task.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer superColor="#04293A"/>
    </>
  );
};

export default Itch_Dev_Log_Blog;