import React from "react";
import Link from "gatsby-link";
const Pricing = () => {
  return (
    <div id="buy" className="mt-16 bg-yellow-500 py-12 lg:mt-20">
      <div className="relative z-0">
        <h2 className="text-4xl leading-10 font-display font-semibold text-gray-900 md:text-5xl md:leading-none text-center">
          Pricing
        </h2>
        <h3 className="text-center mt-3 text-base font-bold text-black sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          Pick your Coding Career package
        </h3>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-10 my-10">
            {/* Creator Package */}
            <div className="max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:col-start-4 lg:col-end-8 lg:row-start-1 lg:row-end-4">
              <div className="relative z-10 rounded-lg shadow-xl">
                <div>
                  <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <p className="text-center text-lg leading-7 font-semibold font-display text-yellow-600 uppercase tracking-widest">
                        Best Value
                      </p>
                      <h2 className="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900 sm:-mx-6">
                        The Creator Package
                      </h2>
                      <div className="mt-4 flex items-center justify-center font-display">
                        <span className="-ml-8 text-right text-2xl leading-8 font-semibold text-gray-400 tracking-wide line-through sm:text-3xl sm:leading-9">
                          $249
                        </span>
                        <span className="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900 sm:text-7xl">
                          <span className="mt-2 mr-1 text-4xl leading-none sm:text-5xl">
                            $
                          </span>
                          <span>199</span>
                        </span>
                        <span className="text-2xl leading-8 font-semibold text-gray-400 tracking-wide sm:text-3xl sm:leading-9">
                          USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-100 sm:px-10 sm:py-10">
                    <ul>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-yellow-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-black">
                          450+ pages of Career Guides, Principles, Strategies,
                          and Tactics
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-yellow-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-black">
                          Lifetime access to book updates and Coding Career
                          Community
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-yellow-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-black">
                          Lifetime access
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-yellow-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-black">
                          PDF, EPUB, MOBI versions + Audio Book + Bibliography
                          with 2 hours of Author Commentary
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-yellow-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-black">
                          10 Hours of Behind The Scenes Recorded Livestreams
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-yellow-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-black ">
                          Upcoming Live and Recorded Workshops ({" "}
                          <Link
                            to="/#workshops"
                            className="text-blue-500 hover:underline"
                          >
                            Learn more
                          </Link>
                          )
                        </p>
                      </li>
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-lg">
                        <a className="block w-full text-center rounded-lg bg-yellow-500 px-6 py-4 text-xl leading-6 font-semibold font-display text-black hover:bg-gray-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                          Buy Now
                        </a>
                      </div>
                      <p className="mt-6 text-center text-base leading-6 font-medium text-gray-900">
                        Buying for your team?{" "}
                        <Link
                          to="/#team-pricing"
                          className="text-black underline font-semibold hover:opacity-75"
                        >
                          View team pricing →
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* community package */}
            <div className="mt-6 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:row-end-3">
              <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                <div className="flex-1 flex flex-col">
                  <div className="bg-white px-6 pt-12 pb-10">
                    <div>
                      <h2 className="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900">
                        The Community Package
                      </h2>
                      <div className="mt-4 flex items-center justify-center font-display">
                        <span className="-ml-8 text-right text-2xl leading-8 font-semibold text-gray-400 tracking-wide line-through sm:text-3xl sm:leading-9">
                          $99
                        </span>
                        <span className="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900 sm:text-7xl">
                          <span className="mt-2 mr-1 text-4xl leading-none sm:text-5xl">
                            $
                          </span>
                          <span>79</span>
                        </span>
                        <span className="text-2xl leading-8 font-semibold text-gray-400 tracking-wide sm:text-3xl sm:leading-9">
                          USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-100 sm:p-10 lg:p-6 xl:p-10">
                    <ul>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-yellow-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-black">
                          450+ pages of Career Guides, Principles, Strategies,
                          and Tactics
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-yellow-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-black">
                          PDF, EPUB, MOBI versions + Audio book + Bibliography ({" "}
                          <Link
                            to="/#files"
                            className="text-blue-500 hover:underline"
                          >
                            Learn more
                          </Link>
                          )
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-yellow-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-black">
                          Lifetime access to book updates
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-yellow-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-black">
                          Lifetime access to dedicated Coding Career Community
                        </p>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <div className="rounded-lg shadow-md">
                        <a
                          className="block w-full text-center rounded-lg bg-white px-6 py-3 text-base leading-6 font-semibold font-display text-black hover:text-yellow-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Only */}
            <div className="mt-6 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-8 lg:col-end-11 lg:row-start-2 lg:row-end-3">
              <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                <div className="flex-1 flex flex-col">
                  <div className="bg-white px-6 pt-12 pb-10">
                    <div>
                      <h2 className="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900">
                        Book Only
                      </h2>
                      <div className="mt-4 flex items-center justify-center font-display">
                        <span className="-ml-8 text-right text-2xl leading-8 font-semibold text-gray-400 tracking-wide line-through sm:text-3xl sm:leading-9">
                          $59
                        </span>
                        <span className="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900 sm:text-7xl">
                          <span className="mt-2 mr-1 text-4xl leading-none sm:text-5xl">
                            $
                          </span>
                          <span>39</span>
                        </span>
                        <span className="text-2xl leading-8 font-semibold text-gray-400 tracking-wide sm:text-3xl sm:leading-9">
                          USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-100 sm:p-10 lg:p-6 xl:p-10">
                    <ul>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-yellow-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-black">
                          450+ pages of Career Guides, Principles, Strategies,
                          and Tactics
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-yellow-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-black">
                          Lifetime access
                        </p>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <div className="rounded-lg shadow-md">
                        <a
                          className="block w-full text-center rounded-lg bg-white px-6 py-3 text-base leading-6 font-semibold font-display text-black hover:text-yellow-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
