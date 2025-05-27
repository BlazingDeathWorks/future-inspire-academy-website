import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface FooterProp {
  superColor: string;
}

export default function Footer({superColor} : FooterProp) {
  const [color, setColor] = useState(superColor);
  useEffect(() => setColor(superColor), [superColor]);

  return (
    <footer className={`p-4 bg-white sm:p-6 dark:bg-[${color}] left-0 bottom-0 w-full border-t-2 border-t-[#064663]`}>
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center rtl:space-x-reverse">
              <span className="self-center text-xl font-medium whitespace-nowrap dark:text-white">
                Future Inspire Academy
              </span>
            </div>
          </div>
          <div className="flex justify-end gap-x-12">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
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
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Explore
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link to="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-[#064663] lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
