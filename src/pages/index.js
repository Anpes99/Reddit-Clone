import Head from "next/head";
import Header from "../components/Header";
import TrendingFeed from "../components/TrendingFeed";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <main className="max-w-screen-xl mx-auto md:p-5">
        <TrendingFeed />
      </main>
    </div>
  );
}
