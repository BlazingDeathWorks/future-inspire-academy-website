interface BlogThumbnailProp {
  src: string;
  title?: string;
  description?: string;
}

export default function BlogThumbnail({src, title, description} : BlogThumbnailProp) {
  return (
    <>
      <div className="flex flex-col">
        <a href="#">
          <img
            className="w-full max-w-max min-w-0 max-h-64 contain-content overflow-auto"
            src={src}
            alt=""
          ></img>
        </a>
        <div className="py-5 px-1">
          <h3 className="text-xl font-bold tracking-tight text-white">
            <a href="#">{title}</a>
          </h3>
          <p className="mt-3 mb-4 font-light text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
