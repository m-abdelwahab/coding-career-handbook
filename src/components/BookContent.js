import React from "react";

const BookContent = () => {
  return (
    <section
      id="learn-more"
      className="py-16 bg-white overflow-hidden lg:py-16s"
    >
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <h2 className="text-center mt-1 text-4xl tracking-tight leading-10 font-semibold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-5xl">
          What&apos;s in The <span>Book</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <h3 className="mt-1 text-2xl text-center tracking-tight leading-10 font-semibold text-gray-900 sm:leading-none sm:text-3xl lg:text-2xl xl:text-2xl mt-12">
            Career Guides
          </h3>

          <p className="text-left max-w-3xl mx-auto mt-6 text-xl leading-7 text-gray-500">
            Aliquam erat volutpat. Cras vitae libero vel nunc faucibus aliquam.
            Nulla varius quis nisi in fringilla. In hac habitasse platea
            dictumst. Sed tempor ac leo sit amet ultrices. Mauris sit amet augue
            ut nibh malesuada placerat vel ut nibh. Nullam rhoncus odio eu justo
            faucibus scelerisque.
          </p>

          <h3 className="text-center  mt-1 text-2xl tracking-tight leading-10 font-semibold text-gray-900 sm:leading-none sm:text-3xl lg:text-2xl xl:text-2xl mt-12">
            Principles
          </h3>

          <p className="text-left max-w-3xl mx-auto mt-6 text-xl leading-7 text-gray-500">
            Aliquam erat volutpat. Cras vitae libero vel nunc faucibus aliquam.
            Nulla varius quis nisi in fringilla. In hac habitasse platea
            dictumst. Sed tempor ac leo sit amet ultrices. Mauris sit amet augue
            ut nibh malesuada placerat vel ut nibh. Nullam rhoncus odio eu justo
            faucibus scelerisque.
          </p>

          <h3 className="mt-1 text-center text-2xl tracking-tight leading-10 font-semibold text-gray-900 sm:leading-none sm:text-3xl lg:text-2xl xl:text-2xl mt-12">
            Strategies
          </h3>

          <p className="text-left max-w-3xl mx-auto mt-6 text-xl leading-7 text-gray-500">
            Aliquam erat volutpat. Cras vitae libero vel nunc faucibus aliquam.
            Nulla varius quis nisi in fringilla. In hac habitasse platea
            dictumst. Sed tempor ac leo sit amet ultrices. Mauris sit amet augue
            ut nibh malesuada placerat vel ut nibh. Nullam rhoncus odio eu justo
            faucibus scelerisque.
          </p>

          <h3 className="mt-1 text-center text-2xl tracking-tight leading-10 font-semibold text-gray-900 sm:leading-none sm:text-3xl lg:text-2xl xl:text-2xl mt-12">
            Tactics
          </h3>

          <p className="text-left max-w-3xl mx-auto mt-6 text-xl leading-7 text-gray-500 pb-16">
            Aliquam erat volutpat. Cras vitae libero vel nunc faucibus aliquam.
            Nulla varius quis nisi in fringilla. In hac habitasse platea
            dictumst. Sed tempor ac leo sit amet ultrices. Mauris sit amet augue
            ut nibh malesuada placerat vel ut nibh. Nullam rhoncus odio eu justo
            faucibus scelerisque.
          </p>
        </div>
        <h3 className="text-center mt-3 text-base font-bold  sm:mt-5 sm:text-xl lg:text-xg xl:text-3xl">
          View the full{" "}
          <a className="text-blue-500 hover:underline" href="./toc.html">
            table of contents →
          </a>
        </h3>
      </div>
    </section>
  );
};

export default BookContent;
