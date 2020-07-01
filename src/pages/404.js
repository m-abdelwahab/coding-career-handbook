import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from "gatsby-link";
import Duck from "../images/duck.svg";
import AlertCircle from "../images/alert-circle.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="container mx-auto px-4 max-w-xl flex flex-col items-center justify-center my-20">
        <img className="w-48" src={AlertCircle} alt="alert" />
        <h1 className=" text-center text-3xl text-black font-bold mb-5">
          We&apos;re sorry - something has gone wrong on our end.
        </h1>
        <div className="mb-4">
          <h2 className="text-md font-bold text-gray-800">
            What could have caused this?
          </h2>
          <ul className="list-inside list-disc mb-4">
            <li>Well, something technical went wrong on our site.</li>
            <li>We may have removed the page and it no longer exists</li>
            <li>You might have typed the in the wrong URL address </li>
          </ul>
          <h2 className="text-md font-bold text-gray-800 ">What can you do?</h2>
          <ul className="list-inside list-disc mb-4">
            <li>Check that the URL you typed in is correct</li>
            <li>If you have any questions send me an email at swyx@hey.com</li>
          </ul>
        </div>
        <button className="btn">
          <Link to="/">go Back Home</Link>
        </button>
        <img className="my-5 w-40" src={Duck} alt="duck" />
      </div>
    </Layout>
  );
}

export default NotFoundPage;
