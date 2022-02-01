import PostFeedItem from "./PostFeedItem";
import TopCommunities from "./TopCommunities";

const PostFeed = () => {
  return (
    <div className="flex space-x-10">
      <div>
        {Array(5)
          .fill()
          .map((_, i) => (
            <PostFeedItem />
          ))}
      </div>

      <div className="hidden md:block">
        <TopCommunities />
      </div>
    </div>
  );
};

export default PostFeed;
