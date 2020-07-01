/* eslint-disable no-unused-vars */
import React from "react";
import {
  Emma,
  Hj,
  Kent,
  Quincy,
  Scott,
  Carlos,
  Dan,
  Adam,
  Randall,
  Aryan,
  Samantha,
  Mahmoud,
} from "../images";

const Testimonials = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <h2 className="text-4xl leading-10 font-display font-semibold text-gray-900 md:text-5xl md:leading-none text-center">
        Book reviews
      </h2>
      <h3 className="text-center mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        See what our early readers are saying!
      </h3>
      {/* Quincy */}
      <div className="py-12 overflow-hidden md:py-20 lg:py-24 bg-gray-50">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-8">
              <div className="max-w-4xl mx-auto text-center text-2xl leading-9  text-gray-900 font">
                <p>
                  “I recommend this book for anyone who is thinking of getting
                  into the field of software development. And I also recommend
                  it as a reference for experienced developers. Shawn has
                  structured this book in a way that you can easily come back to
                  it and fill in the gaps in your knowledge.”
                </p>
              </div>
              <div className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full shadow-md"
                      src={Quincy}
                      alt="Photo of Quincy Larson"
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-xl leading-6 font-medium text-gray-900">
                      Quincy Larson
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z"></path>
                    </svg>
                    <div className="text-base leading-6 font-medium">
                      Teacher, freeCodeCamp
                    </div>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
      {/* Testimonials Right*/}
      <div className="mt-6 border-t-2 border-gray-100 pt-10">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          {/* Randall */}
          <div>
            <div className="m-2 md:m-0">
              <p className="text-lg text-gray-900 leading-loose sm:w-5/6 w-full">
                “I was also lucky enough to read @Coding_Career early and I was
                thoroughly blown away! It’s the book I wish I had when I started
                my dev career.”
                <a
                  href="https://twitter.com/RandallKanna/status/1265506271039496192"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline w-5 h-5 ml-1"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </p>

              <div className="flex items-center mt-3">
                <img
                  className="h-16 w-16 rounded-full shadow-md"
                  src={Randall}
                  alt="Randall Kanna's Photo"
                />
                <div className="flex flex-col ml-2">
                  <p className="text-xl font-bold">Randall kanna</p>
                  <p className="">Engineer, Author: the Standout Developer</p>
                </div>
              </div>
            </div>

            {/* Samantha */}
            <div className="m-2 md:m-0">
              <p className="text-lg text-gray-900 leading-loose mt-16 sm:w-5/6 w-full ">
                “I wish I had this book when I was switching jobs. It helps you
                understand what skills you should leverage and really encourages
                you not underlevel yourself!”
              </p>
              <div className="flex items-center mt-3">
                <img
                  className="h-16 w-16 rounded-full shadow-md"
                  src={Samantha}
                  alt="Kent C. Dodds Photo"
                />
                <div className="flex flex-col ml-2">
                  <p className="text-xl font-bold">Samantha Bretous</p>
                  <p className="">
                    Computer magic maker, Software Engineer at Mailchimp
                  </p>
                </div>
              </div>
            </div>
            {/* Aryan */}
            <div className="m-2 md:m-0">
              <p className=" text-lg text-gray-900 leading-loose mt-16 sm:w-5/6 w-full">
                “The links to high-value blog posts already make the book worth
                it, never mind the amazing insight and context provided by
                Shawn. Must buy for #CodeNewbies looking to break in or senior
                engineers looking to grow!”
                <a
                  href="https://twitter.com/AryanJabbari/status/1263597781286961159"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline w-5 h-5 ml-1"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </p>
              <div className="flex items-center mt-3">
                <img
                  className="h-16 w-16 rounded-full shadow-md"
                  src={Aryan}
                  alt="Aryan Jabbari's Photo"
                />
                <div className="flex flex-col ml-2">
                  <p className="text-xl font-bold">Aryan Jabbari</p>
                  <p className="">The WebDev Coach</p>
                </div>
              </div>
            </div>
            {/* Chen */}
            <div className="m-2 md:m-0">
              <p className="text-lg text-gray-900 leading-loose mt-16 sm:w-5/6 w-full">
                “For anyone looking for career advice as a coder but is tired of
                being told they have to do X or never do Y. Shawn is sharing his
                personal experiences and knowledge of navigating these sometimes
                overwhelming waters in the hopes you might find something
                useful. It&apos;s like having a caring big brother in your
                pocket! (if you read on your phone)”
              </p>
              <div className="flex items-center mt-3">
                <img
                  className="h-16 w-16 rounded-full shadow-md"
                  src={Hj}
                  alt="Chen Hui Jing"
                />
                <div className="flex flex-col ml-2">
                  <p className="text-xl font-bold">Chen Hui Jing</p>
                  <p className="">CSS lover, Developer Advocate at Nexmo</p>
                </div>
              </div>
            </div>

            {/* Kent */}
            <div className="m-2 md:m-0">
              <p className="text-lg text-gray-900 leading-loose sm:w-5/6 w-full mt-16">
                “Wow! The immense wealth of knowledge and experience shared in
                “The Coding Career Handbook” cannot be overstated. I love how
                Shawn is able to take his own experience and what he&apos;s
                observed in the careers of others and generalize it to
                principles that will help others level up their own careers. 5
                stars ⭐⭐⭐⭐⭐”
              </p>
              <div className="flex items-center mt-3">
                <img
                  className="h-16 w-16 rounded-full shadow-md"
                  src={Kent}
                  alt="Kent C. Dodds Photo"
                />
                <div className="flex flex-col ml-2">
                  <p className="text-xl font-bold">kent C. Dodds</p>
                  <p className="">KentCDodds.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* testimonials left */}
          {/* Emma */}
          <div>
            <div className="m-2 md:m-0">
              <p className="text-lg text-gray-900 leading-loose sm:w-5/6 w-full mt-16 md:mt-0">
                “I love that he included information about burnout as this is
                one of the biggest hurdles new developer encounter early in
                their career. Shawn has included links to many wonderful
                resources and graphs from other content creators. The section on
                negotiation is one I could have used early on in my career.”
              </p>
              <div className="flex items-center mt-3">
                <img
                  className="h-16 w-16 rounded-full shadow-md"
                  src={Emma}
                  alt="Emma Bostian's Photo"
                />
                <div className="flex flex-col ml-2">
                  <p className="text-xl font-bold">Emma Bostian</p>
                  <p className="">Ladybug.fm, Software Engineer at Spotify</p>
                </div>
              </div>
            </div>
            {/* Carlos */}
            <div className="m-2 md:m-0">
              <p className="text-lg text-gray-900 leading-loose sm:w-5/6 w-full mt-16">
                “I wish I had this book when I started my career! Every single
                chapter is like a growth hack but for developers. I&apos;d say
                this book is worth 1000x long term!”
              </p>
              <div className="flex items-center mt-3">
                <img
                  className="h-16 w-16 rounded-full shadow-md"
                  src={Carlos}
                  alt="Carlos Roso's Photo"
                />
                <div className="flex flex-col ml-2">
                  <p className="text-xl font-bold">Carlos Roso</p>
                  <p className="">Full Stack Developer, Toptal</p>
                </div>
              </div>
            </div>
            {/* Dan */}
            <div className="m-2 md:m-0">
              <p className="text-lg text-gray-900 leading-loose sm:w-5/6 w-full mt-16">
                “I’m reading through swyx’s @Coding_Career and I’m genuinely
                impressed. It’s very dense but reads very lightly. Lots of
                useful context for someone coming into the industry.”
                <a
                  href="https://twitter.com/dan_abramov/status/1265463366694440960"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline w-5 h-5 ml-1"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </p>
              <div className="flex items-center mt-3">
                <img
                  className="h-16 w-16 rounded-full shadow-md"
                  src={Dan}
                  alt="Dan Abramov's Photo"
                />
                <div className="flex flex-col ml-2">
                  <p className="text-xl font-bold">Dan Abramov</p>
                  <p className="">JustJavaScript.com</p>
                </div>
              </div>
            </div>
            {/* Adam */}
            <div className="m-2 md:m-0">
              <p className="text-lg text-gray-900 leading-loose sm:w-5/6 w-full mt-16">
                “The Coding Career Handbook is a superb guide to the software
                engineering career field. I wish I&apos;d had this available to
                me when I was just starting out 15 years ago!”
              </p>
              <div className="flex items-center mt-3">
                <img
                  className="h-16 w-16 rounded-full shadow-md"
                  src={Adam}
                  alt="Adam Rackis' Photo"
                />
                <div className="flex flex-col ml-2">
                  <p className="text-xl font-bold">Adam Rackis</p>
                  <p className="">Js/C++ Engineer</p>
                </div>
              </div>
            </div>

            {/* Mahmoud */}
            <div className="m-2 md:m-0">
              <p className="text-lg text-gray-900 leading-loose sm:w-5/6 w-full mt-16">
                “The Coding career Handbook is incredible! It&apos;s practical
                and covers so many topics. I&apos;ll definitely use this book as
                a reference throughout my career”
              </p>
              <div className="flex items-center mt-3">
                <img
                  className="h-16 w-16 rounded-full shadow-md"
                  src={Mahmoud}
                  alt="Mahmoud Abdelwahab's Photo"
                />
                <div className="flex flex-col ml-2">
                  <p className="text-xl font-bold">Mahmoud Abdelwahab</p>
                  <p className="">
                    Front-end Engineer, Learner Advocate at Egghead.io, Auth0
                    Ambassador
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scott */}
      <div className="py-12 overflow-hidden md:py-20 lg:py-24 bg-gray-50">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-8">
              <div className="max-w-4xl mx-auto text-center text-2xl leading-9  text-gray-900">
                <p>
                  “What should I do? Just tell me what to do! There&apos;s no
                  One Right Answer for how to become a coder, much less a happy
                  and &quot;successful&quot; one. What there is, however, are
                  thousands of stories of how folks have cracked the coding
                  career themselves! Shawn has put together his story, with a
                  ton of practical and pragmatic real world advice! The great
                  thing about advice? You don&apos;t have to take it. The Coding
                  Career Handbook is a wonderful collection of what&apos;s
                  worked and what may not work for you! These are guidelines and
                  tactics that you can incorporate into your coding life and
                  career whether you&apos;re a code newbie or a code oldie like
                  me - it&apos;s never too late to learn how to be a great
                  programmer!”
                </p>
              </div>
              <div className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full shadow-md"
                      src={Scott}
                      alt="Photo of Scott Hanselman"
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-xl leading-6 font-medium text-gray-900">
                      Scott Hanselman
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z"></path>
                    </svg>
                    <div className="text-base leading-6 font-medium">
                      Programmer
                    </div>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
