import { Link } from "gatsby";
import PropTypes from "prop-types";
import { useState } from "react";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header>
      <nav className="bg-teal-500">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between p-4 md:p-8">
          <Link to="/">
            <span className="text-xl font-bold tracking-wide text-white">
              {siteTitle}
            </span>
          </Link>
          <button
            className="block flex items-center rounded border border-white px-3 py-2 text-white md:hidden"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } w-full md:block md:flex md:w-auto md:items-center`}
          >
            <div className="space-x-6 text-sm">
              <Link
                to="/"
                className="mt-4 block text-white no-underline md:mt-0 md:inline-block"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="mt-4 block text-white no-underline md:mt-0 md:inline-block"
              >
                Projects
              </Link>
              <Link
                to="/blog"
                className="mt-4 block text-white no-underline md:mt-0 md:inline-block"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
