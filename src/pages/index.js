import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />

      <section className="border-b pb-8 leading-normal">
        <header className="text-center md:text-left">
          <h2 className="text-4xl font-bold">About Me</h2>
        </header>

        <p className="mt-4 text-justify text-xl">
          Constantly learning different language, libraries, and frameworks.
        </p>

        <p className="mt-4 text-justify text-xl">
          Building framework-agnostic skills.
        </p>

        <div className="mt-4">
          <span className="font-bold">Email: </span>
          <a href="mailto:is101.lemuel@gmail.com" className="underline">
            is101.lemuel@gmail.com
          </a>
        </div>

        <div className="mt-4">
          <span className="font-bold">Github: </span>
          <a href="https://github.com/xxRockOnxx" className="underline">
            https://github.com/xxRockOnxx
          </a>
        </div>
      </section>

      <section className="mt-8">
        <header className="text-center leading-normal md:text-left">
          <h2 className="text-4xl font-bold">Skills and Experience</h2>
        </header>

        <ul className="mt-4 list-disc pl-10 leading-loose">
          <li>
            PHP
            <ul className="list-disc pl-10">
              <li>Laravel / Lumen</li>
              <li>Doctrine</li>
              <li>PHPUnit</li>
            </ul>
          </li>
          <li>
            Javascript
            <ul className="list-disc pl-10">
              <li>Typescript</li>

              <li>
                Vue
                <ul className="list-disc pl-10">
                  <li>Vuetify</li>
                  <li>Nuxt</li>
                </ul>
              </li>

              <li>
                React
                <ul className="list-disc pl-10">
                  <li>Gatsby</li>
                  <li>Next.js</li>
                  <li>React Native</li>
                </ul>
              </li>

              <li>
                NodeJS
                <ul className="list-disc pl-10">
                  <li>Koa</li>
                  <li>Express</li>
                  <li>NestJS</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>Linux</li>
          <li>Docker</li>
          <li>CQRS</li>
          <li>Event Sourcing</li>
          <li>Test Driven Development</li>
          <li>Domain Driven Development</li>
        </ul>
      </section>
    </Layout>
  );
}

export default IndexPage;
