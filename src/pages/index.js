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
          className="border-grey-lighter mx-auto block rounded-full border-4 border-solid"
          height={160}
          width={160}
          alt="Author"
        />

        <h1 className="my-8 inline-block text-3xl font-bold text-gray-800">
          Hey there, I'm Lemuel Flores
        </h1>

        <p className="mb-4 text-2xl">
          I love quality codes and I am constantly learning new kinds of stuff.
        </p>
        <p className="text-2xl">
          I can work with various kinds of projects. Learn more{" "}
          <Link to="/about" className="font-medium underline">
            about me
          </Link>
          .
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
