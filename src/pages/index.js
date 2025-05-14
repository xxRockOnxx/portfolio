import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />

      <section className="border-b pb-8">
        <header className="text-center md:text-left">
          <h1 className="text-4xl font-bold">About Me</h1>
        </header>

        <p className="mt-4 leading-relaxed lg:text-xl">
          Constantly expanding skillset by learning different language,
          libraries, and frameworks.
        </p>

        <p className="mt-2 leading-relaxed lg:mt-4 lg:text-xl">
          Building framework-agnostic skills.
        </p>

        <p className="mt-2 leading-relaxed lg:mt-4 lg:text-xl">
          Contributes to open-source projects whenever possible.
        </p>

        <div className="mt-4 text-sm lg:text-base">
          <span className="font-bold">Email: </span>
          <a href="mailto:is101.lemuel@gmail.com" className="underline">
            is101.lemuel@gmail.com
          </a>
        </div>

        <div className="mt-2 text-sm lg:mt-4 lg:text-base">
          <span className="font-bold">Github: </span>
          <a href="https://github.com/xxRockOnxx" className="underline">
            https://github.com/xxRockOnxx
          </a>
        </div>

        <a
          href="https://stackexchange.com/users/5819823"
          className="mt-4 inline-block"
        >
          <img
            src="https://stackexchange.com/users/flair/5819823.png"
            width="208"
            height="58"
            alt="profile for captainskippah on Stack Exchange, a network of free, community-driven Q&amp;A sites"
            title="profile for captainskippah on Stack Exchange, a network of free, community-driven Q&amp;A sites"
          />
        </a>
      </section>

      <section className="mt-8">
        <header className="text-center leading-normal md:text-left">
          <h1 className="text-4xl font-bold">Skills and Experience</h1>
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
                  <li>Fastify</li>
                  <li>NestJS</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            Go
            <ul className="list-disc pl-10">
              <li>Gin</li>
            </ul>
          </li>

          <li>AWS</li>
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
