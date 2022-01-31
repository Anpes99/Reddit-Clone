const TrendingFeedItem = (props) => {
  const { author, description, title, url, urlToImage } = props.data;
  return (
    <div
      className="relative cursor-pointer rounded-lg"
      onClick={() => {
        window.location.href = url;
      }}
    >
      <img
        className="bg-gray-100 object-cover  h-48 max-w-96 w-full rounded-lg "
        src={urlToImage}
        alt=""
      />
      <div className="bg-black  z-10 h-full w-full absolute top-0 left-0 opacity-20 rounded-lg"></div>
      <p className="m-1 font-bold z-20 text-gray-50 absolute bottom-0 left-0 line-clamp-3">
        {title}
      </p>
    </div>
  );
};

export default TrendingFeedItem;
