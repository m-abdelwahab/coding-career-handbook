import React from "react";
import BookCover from "../images/book.png";
import Link from "gatsby-link";
import {
  SoftwareSession,
  IncludeJS,
  ReactEurope,
  FullStackAcademy,
  NewlinePodcast,
} from "../images";

const Hero = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      {/* banner */}
      <div className="font-medium absolute w-full text-md text-center text-black bg-yellow-500 p-2">
        🎉 Celebrating our Launch! 25% of Book Sales will go to support
        <a
          className="pl-1 underline"
          href="https://www.freecodecamp.org/"
          target="_blank"
          rel="noreferrer"
        >
          FreeCodeCamp.
        </a>
      </div>
      {/* Hero */}
      <div className="mt-24 mx-auto pb-16 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:mx-auto lg:text-left lg:mt-16">
            <div className="text-sm font-semibold uppercase tracking-wider text-gray-700 sm:text-base lg:text-sm xl:text-base">
              Available Now
            </div>
            <h1 className="capitalize mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
              Learn how to build <br className="hidden md:inline" />
              <span className="underline-effect">an exceptional </span>career
            </h1>
            <h2 className="mt-3 text-base text-black sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              The Coding will always be the easiest part of a Coding Career.
              This is a comprehensive guide about the principles, strategies and
              tactics developers can use to build an awesome career!
            </h2>
            <div className="flex-col sm:flex-row flex justify-center lg:justify-start">
              <Link
                to="/#buy"
                className="shadow-md w-full sm:w-1/3 my-5 mr-5 text-center rounded-lg bg-yellow-500 px-6 py-4 text-xl leading-6 font-semibold font-display text-black hover:bg-yellow-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
              >
                Buy Now
              </Link>
              <Link
                to="/#learn-more"
                className="shadow-md w-full sm:w-1/3 my-5 text-center rounded-lg bg-transparent px-6 py-4 text-xl leading-6 font-semibold font-display text-black hover:bg-yellow-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 border-black border-2"
              >
                Learn More
              </Link>
            </div>
            <p className="mt-3 font-bold text-base text-black sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              As Seen On
            </p>
            <div className="flex mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 items-center">
              <a
                href="https://www.producthunt.com/posts/the-coding-career-handbook?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-the-coding-career-handbook"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="The Coding Career Handbook - Guides, Principles, Strategies and
      Tactics for Jr to Sr Devs | Product Hunt Embed"
                  data-src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=211610&amp;theme=light"
                  width="375px"
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=211610&amp;theme=light"
                />
              </a>
              <a
                className="mx-2"
                href="https://www.softwaresessions.com/episodes/learning-in-public/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-20" src={SoftwareSession} alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=1ayI9j57VlQ"
                className="mx-2"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-20 " src={IncludeJS} alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=bcca0VCJe9Q"
                className="mx-2"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-20 " src={ReactEurope} alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=QFHO2-8fGtM"
                className="mx-2"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-20 " src={FullStackAcademy} alt="" />
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/newline/id1509124255"
                className="mx-2"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-20 " src={NewlinePodcast} alt="" />
              </a>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center">
            <div className="relative mx-auto w-full lg:max-w-lg">
              <img className="w-full" src={BookCover} alt="Book cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
