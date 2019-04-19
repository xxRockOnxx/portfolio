import React from "react";

import Layout from "../components/layout";
import { Link } from "gatsby";
import SEO from "../components/seo";
import author from "../images/author.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="text-center">
        <img
          src={author}
          className="rounded-full border-4 border-solid border-grey-lighter block mx-auto"
          height={160}
          width={160}
          alt="Author"
        />

        <h1 className="inline-block my-8">Hey there, I'm Lemuel Flores</h1>

        <p className="text-2xl mb-4">
          I love quality codes and I am constantly learning new kinds of stuff.
        </p>
        <p className="text-2xl">
          I can work with various kinds of projects. Learn more{" "}
          <Link to="/about" className="font-bold">
            about me
          </Link>
          .
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
