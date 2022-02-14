import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="text-center">
        <img
          src={abductionIllustration}
          className="mx-auto block w-1/2"
          alt="Ghost getting abducted by aliens"
        />
        <h2 className="my-8 inline-block bg-yellow-500 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
