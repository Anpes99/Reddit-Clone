import Head from "next/head";
import Header from "../components/Header";
import PostFeed from "../components/PostFeed";
import PostFeedItem from "../components/PostFeedItem";
import TrendingFeed from "../components/TrendingFeed";

export default function Home() {
  return (
    <div className=" bg-gray-300">
      <Head>
        <title>Reddit 2.0</title>
      </Head>

      <Header />
      <main
        className="max-w-screen-lg mx-auto md:p-5
      pt-3"
      >
        <TrendingFeed />
        <div>
          <PostFeed />
        </div>
      </main>
    </div>
  );
}
