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
      render={(data) => (
        <div className="text-grey-darkest flex min-h-screen flex-col font-sans">
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-8 md:p-8">
            {children}
          </div>

          <footer className="bg-blue-500">
            <div className="md:flex-no-wrap mx-auto flex max-w-5xl flex-wrap p-4 text-sm md:p-8">
              <p className="w-full text-center text-white md:w-auto md:text-left">
                Created with{" "}
                <a
                  href="https://www.gatsbyjs.org"
                  className="font-bold text-white no-underline"
                >
                  Gastby
                </a>
                {" and "}
                <a
                  href="https://tailwindcss.com"
                  className="font-bold text-white no-underline"
                >
                  Tailwind CSS
                </a>
              </p>

              <div className="mt-2 w-full text-center md:mt-0 md:ml-auto md:w-auto md:text-right">
                <a
                  href="https://github.com/xxRockOnxx"
                  className="font-bold text-white no-underline"
                >
                  GitHub
                </a>
                <a
                  href="https://gitlab.com/captainskippah"
                  className="ml-4 font-bold text-white no-underline"
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
  children: PropTypes.node.isRequired,
};

export default Layout;
