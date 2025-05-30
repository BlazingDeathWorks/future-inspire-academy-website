import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface FooterProp {
  superColor: string;
}

export default function Footer({superColor} : FooterProp) {
  const [color, setColor] = useState(superColor);
  useEffect(() => setColor(superColor), [superColor]);

  return (
    <footer className={`p-4 sm:p-6 left-0 bottom-0 w-full border-t-2 border-t-[#064663]`} style={{backgroundColor: color}}>
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center rtl:space-x-reverse">
              <span className="self-center text-xl font-medium whitespace-nowrap text-white">
                Future Inspire Academy
              </span>
            </div>
          </div>
          <div className="flex justify-end gap-x-12">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-400">
                <li>
                  <a
                    href="https://discord.gg/jvvJnJ4nW8"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Explore
              </h2>
              <ul className=" text-gray-400">
                <li className="mb-4">
                  <Link to="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto border-[#064663] lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">
            © 2025{" "}
            <a href="https://futureinspireacademy.com" className="hover:underline">
              Future Inspire Academy
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
