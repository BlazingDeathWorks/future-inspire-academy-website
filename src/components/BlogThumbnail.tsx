interface BlogThumbnailProp {
  route?: string;
  img: string;
  title?: string;
  description?: string;
}

export default function BlogThumbnail({route, img, title, description} : BlogThumbnailProp) {
  return (
    <>
      <div className="flex flex-col">
        <a href={route}>
          <img
            className="w-full max-h-64 contain-content"
            src={img}
            alt=""
          ></img>
        </a>
        <div className="py-5 px-1">
          <h3 className="text-xl font-bold tracking-tight text-white">
            <a href={route}>{title}</a>
          </h3>
          <p className="mt-3 mb-4 font-light text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
