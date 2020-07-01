import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from "gatsby-link";

function TableOfContentsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`coding career`, `coding career handbook`]}
        title="Table Of Contents"
      />
      <div className="relative bg-gray-100 overflow-hidden">
        <div className="py-16 max-w-3xl bg-white overflow-hidden lg:py-16s mx-auto mt-14 mb-14 my-10 shadow-lg rounded-lg">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-center mt-1 text-4xl tracking-tight leading-10 font-semibold text-gray-900 sm:leading-none sm:text-5xl lg:text-4xl xl:text-4xl">
              The Coding Career <span className=" ">Handbook</span>
            </h1>

            <h2 className="text-center mt-1 text-2xl tracking-tight leading-10 font-semibold text-gray-500 sm:leading-none sm:text-3xl lg:text-2xl xl:text-2xl mt-4">
              Table of Contents
            </h2>

            <ol className="mt-8">
              <li className="font-bold text-xl">Preface - By Quincy Larson</li>

              <li className="font-bold text-xl mt-4">Foreword: Real Talk</li>

              <li className="font-bold text-xl mt-4">
                Career Guides
                <ol className="ml-4">
                  <li className="font-normal text-lg text-gray-600">
                    Code Newbies{" "}
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Job Hunt
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Junior Dev
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Junior Dev To Senior
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Senior Dev
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Beyond your coding career
                  </li>
                </ol>
              </li>

              <li className="font-bold text-xl mt-4">
                Principles
                <ol className="ml-4">
                  <li className="font-normal text-lg text-gray-600">
                    Learn in public
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Clone Open Source Apps
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Know Your Tools
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Specialize In The New
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Open Source Your Knowledge
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Spark Joy
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    The Platinum Rule
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Good ENough is Better han Best
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    First Principles Thinking
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Write, a lot
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Pick up what they put down
                  </li>
                </ol>
              </li>

              <li className="font-bold text-xl mt-4">
                Strategies
                <ol className="ml-4">
                  <li className="font-normal text-lg text-gray-600">
                    Intro to Strategy
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Learning Gears
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Specialist vs Generalist
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Betting on Technologies
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Profit Center vs Cost Center
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Engineering Career Ladders
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Intro to Tech Strategy
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Strategic Awareness
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Megatrends
                  </li>
                </ol>
              </li>

              <li className="font-bold text-xl mt-4">
                Tactics
                <ol className="ml-4">
                  <li className="font-normal text-lg text-gray-600">
                    Negotiating{" "}
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Learning in Private
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Design for Developers in a Hurry
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Lampshading
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Conference CFPs
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Mise en Place Writing
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Side Projects
                  </li>

                  <li className="font-normal text-lg text-gray-600">
                    Developer&apos;s Guide to Twitter
                  </li>
                  <li className="font-normal text-lg text-gray-600">
                    Marketing Yourself
                  </li>
                </ol>
              </li>

              <li className="font-bold text-xl mt-4">
                Finale: The Operating System of You
              </li>
            </ol>

            <p className="mx-auto text-center mt-8 text-2xl font-medium">
              Convinced?{" "}
              <Link className="text-blue-500 " to="/#buy">
                Get the Book Now 📘
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TableOfContentsPage;
