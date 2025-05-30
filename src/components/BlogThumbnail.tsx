import { Link } from "react-router-dom";

interface BlogThumbnailProp {
  route: string;
  img: string;
  title?: string;
  description?: string;
}

export default function BlogThumbnail({route, img, title, description} : BlogThumbnailProp) {
  return (
    <>
      <div className="flex flex-col">
        <Link to={route}>
          <img
            className="w-full max-w-max min-w-0 max-h-64 contain-content overflow-auto"
            src={img}
            alt=""
          ></img>
        </Link>
        <div className="py-5 px-1">
          <h3 className="text-xl font-bold tracking-tight text-white">
            <Link to={route}>{title}</Link>
          </h3>
          <p className="mt-3 mb-4 font-light text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
