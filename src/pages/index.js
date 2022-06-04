import Layout from "../components/layout";
import { Link } from "gatsby";
import SEO from "../components/seo";
import author from "../images/author.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />

      <div>
        <img
          src={author}
          className="border-grey-lighter mb-8 block rounded-full border-4 border-solid"
          height={160}
          width={160}
          alt="Author"
        />

        <h1 className="mb-8 inline-block text-3xl font-bold text-gray-800">
          Hey there, I'm Lemuel Flores
        </h1>

        <p className="mb-6 text-xl sm:text-2xl">
          Constantly learning different language, libraries, and frameworks.
        </p>

        <p className="mb-6 text-xl sm:text-2xl">
          Building framework-agnostic skills.
        </p>

        <p className="text-xl sm:text-2xl">
          <span>Learn more </span>
          <Link to="/about/" className="font-medium underline">
            about me
          </Link>
          <span> and check out my </span>
          <Link to="/projects/" className="font-medium underline">
            projects
          </Link>
          <span> and </span>
          <Link to="/blog/" className="font-medium underline">
            blog
          </Link>
          .
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
