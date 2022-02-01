import Image from "next/dist/client/image";
import img from "../../public/fake data/markus-spiske-2siq7rVFeZs-unsplash.jpg";
import { ArrowSmUpIcon } from "@heroicons/react/outline";
import { ArrowSmDownIcon } from "@heroicons/react/outline";
import skyrim from "../../public/fake data/skyrim.png";

const PostFeedItem = (props) => {
  return (
    <div className="flex flex-col sm:flex-row w-full  sm:h-96 bg-white border mb-4">
      <div className=" hidden sm:flex flex-col items-center bg-gray-100 w-20">
        <ArrowSmUpIcon className="h-7 text-gray-400 hover:text-red-500" />
        <p className=" px-1 font-bold text-sm">10.0k</p>
        <ArrowSmDownIcon className="h-7 text-gray-400 hover:text-blue-500" />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col p-2">
          <div className="flex items-center space-x-2 ">
            <div className="inline-block rounded-full overflow-hidden h-7 w-7">
              <Image src={skyrim} />
            </div>
            <p className="inline mr-2 font-bold text-sm">r/suomi</p>
            <p className="inline text-xs text-gray-400">
              posted by u/username 2 hours ago
            </p>
          </div>
          <div className="mt-2 font-semibold text-lg line-clamp-2">
            This is a post title. This is a post title. This is a post title.
            This is a post title.This is a post title. This is a post title.
            This is a post title. This is a post title.
          </div>
        </div>
        <div className="flex items-center w-full overflow-hidden self-stretch">
          <Image src={img} objectFit="cover" />
        </div>
      </div>
      <div className="flex sm:hidden p-2 items-center">
        <ArrowSmUpIcon className="text-gray-400 h-7 hover:text-red-500" />
        <p className=" px-1 font-bold text-sm">10.0k</p>
        <ArrowSmDownIcon className="h-7 text-gray-400 hover:text-blue-500" />
      </div>
    </div>
  );
};

export default PostFeedItem;
