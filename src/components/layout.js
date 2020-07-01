import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <main>{children}</main>

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <a
                href="mailto:swyx@hey.com"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://twitter.com/swyx"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Twitter
              </a>
            </div>
          </nav>
          <div className="mt-8">
            <p className="text-center text-base leading-6 text-gray-600">
              © 2020 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
