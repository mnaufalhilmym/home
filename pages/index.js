import Head from "next/head";
import { useState, useEffect } from "react";

import BackgroundMe from "../components/BackgroundMe";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

export default function Home() {
  const [swipeText, setSwipeText] = useState(0);

  useEffect(() => {
    const swipeTimeout = setTimeout(() => {
      setSwipeText((prevSwipeText) => {
        if (prevSwipeText < 3) return prevSwipeText + 1;
        return 0;
      });
    }, 3000);

    return () => clearTimeout(swipeTimeout);
  }, [swipeText]);

  return (
    <>
      <Head>
        <title>Muhammad Naufal Hilmy Makarim</title>
      </Head>

      <main className="max-w-screen max-h-screen bg-gray-900">
        <BackgroundMe />
        <LeftBar />
        <RightBar />
        <div className="absolute top-2/3 left-2/4 -translate-x-2/4 opacity-1 font-sans font-bold sm:text-sm text-xs text-white tracking-widest uppercase">
          <h1 className="transition-all duration-700 xl:text-2xl lg:text-xl">
            Hi there! 👋
          </h1>
          <div className="transition-all duration-700 flex xl:h-10 lg:h-9 md:h-7 sm:h-5 h-4 xl:text-4xl lg:text-3xl md:text-xl my-4 whitespace-nowrap overflow-hidden">
            <h3 className="whitespace-pre">I'm </h3>
            <span
              className={`transition-transform duration-700
              xl:-translate-y-${swipeText * 10}
              lg:-translate-y-${swipeText * 9}
              md:-translate-y-${swipeText * 7}
              sm:-translate-y-${swipeText * 5}
              -translate-y-${swipeText * 4}`}
            >
              <p>Muhammad Naufal Hilmy Makarim</p>
              <p>an Electrical Engineering student</p>
              <p>a developer</p>
              <p>an ardent Linux user</p>
            </span>
          </div>
          <h4>Let's get in touch 😉</h4>
        </div>
      </main>

      {/* Workaround so that the css module is loaded */}
      <span className="hidden xl:-translate-y-0 xl:-translate-y-10 xl:-translate-y-20 xl:-translate-y-30"></span>
      <span className="hidden lg:-translate-y-0 lg:-translate-y-9 lg:-translate-y-18 lg:-translate-y-27"></span>
      <span className="hidden md:-translate-y-0 md:-translate-y-7 md:-translate-y-14 md:-translate-y-21"></span>
      <span className="hidden sm:-translate-y-0 sm:-translate-y-5 sm:-translate-y-10 sm:-translate-y-15"></span>
      <span className="hidden -translate-y-0 -translate-y-4 -translate-y-8 -translate-y-12"></span>
    </>
  );
}
