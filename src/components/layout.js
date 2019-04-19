import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="flex flex-col flex-1 max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </div>

          <footer className="bg-blue">
            <div className="flex max-w-xl mx-auto p-4 md:p-8 text-sm flex-wrap md:flex-no-wrap">
              <p className="text-white w-full md:w-auto text-center md:text-left">
                Created with{" "}
                <a
                  href="https://www.gatsbyjs.org"
                  className="font-bold no-underline text-white"
                >
                  Gastby
                </a>
                {" and "}
                <a
                  href="https://tailwindcss.com"
                  className="font-bold no-underline text-white"
                >
                  Tailwind CSS
                </a>
              </p>

              <div className="w-full md:w-auto md:ml-auto text-center md:text-right">
                <a
                  href="https://github.com/xxRockOnxx"
                  className="font-bold no-underline text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://gitlab.com/captainskippah"
                  className="font-bold no-underline text-white ml-4"
                >
                  GitLab
                </a>
              </div>
            </div>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
