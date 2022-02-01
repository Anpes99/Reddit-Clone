import PostFeedItem from "./PostFeedItem";
import TopCommunities from "./TopCommunities";
import { FireIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/outline";
import { TrendingUpIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import skyrim from "../../public/fake data/skyrim.png";

const PostFeed = () => {
  return (
    <div className="flex space-x-10">
      <div>
        <div className="flex space-x-4 bg-white p-5 text-sm ">
          <button className="flex items-center font-semibold text-gray-400 space-x-1 hover:bg-gray-100 px-2 py-1 rounded-3xl">
            <FireIcon className="h-7" />
            <p>Hot</p>
          </button>
          <button className="flex items-center font-semibold text-gray-400 space-x-1 hover:bg-gray-100 px-2 py-1 rounded-3xl">
            <SunIcon className="h-7" />
            <p>New</p>
          </button>
          <button className="flex items-center font-semibold text-gray-400 space-x-1 hover:bg-gray-100 px-2 py-1 rounded-3xl">
            <TrendingUpIcon className="h-7" />
            <p>Top</p>
          </button>
          <button className="flex items-center font-semibold text-gray-400 space-x-1 hover:bg-gray-100 px-2 py-1 rounded-3xl">
            <p>Today</p>
            <ChevronDownIcon className="h-7" />
          </button>
          <button className="flex items-center font-semibold text-gray-400 space-x-1 hover:bg-gray-100 px-2 py-1 rounded-3xl">
            <p>...</p>
          </button>
        </div>
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
