import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="leading-normal pb-6 border-b border-solid">
        <header className="text-center md:text-left">
          <h2 className="text-4xl">About Me</h2>
        </header>

        <p className="text-xl text-justify mt-4">
          I aspire to write framework-agnostic codes.
        </p>
        <p className="text-xl text-justify mt-2">
          Trending technologies come and go. Understanding principles and knowing how and when
          to implement the right pattern at the right time is forever.
        </p>
        <p className="text-xl text-justify mt-2">
          I constantly try to improve the quality of my work and I'm always
          trying out new kinds of stuff.
        </p>

        <div className="mt-4">
          <span className="font-bold">Email: </span>
          <a href="mailto:is101.lemuel@gmail.com">is101.lemuel@gmail.com</a>
        </div>
      </section>

      <section className="mt-8 pb-6 border-b border-solid">
        <header className="leading-normal text-center md:text-left">
          <h2 className="text-4xl">Skills and Experience</h2>
          <div className="text-xl mt-4">
            Here is the list of all the technologies I have worked with before:
          </div>
        </header>

        <ul className="mt-4 leading-loose">
          <li>
            PHP
            <ul>
              <li>Laravel</li>
              <li>Lumen</li>
              <li>Doctrine 2</li>
              <li>PHPUnit</li>
            </ul>
          </li>
          <li>
            Javascript
            <ul>
              <li>
                Vue
                <ul>
                  <li>Vuex</li>
                  <li>Vuetify</li>
                  <li>Nuxt</li>
                </ul>
              </li>
              <li>
                React
                <ul>
                  <li>Redux</li>
                  <li>Gatsby</li>
                </ul>
              </li>
              <li>
                NodeJS
                <ul>
                  <li>Koa</li>
                  <li>Express</li>
                </ul>
              </li>
              <li>Typescript</li>
              <li>TypeORM</li>
              <li>InversifyJS</li>
              <li>jQuery</li>
            </ul>
          </li>
          <li>SASS / SCSS</li>
          <li>
            Java
            <ul>
              <li>Spring Boot</li>
              <li>jUnit</li>
              <li>TestNG</li>
              <li>Eclipse RCP</li>
              <li>SWT / Jface</li>
              <li>Android</li>
            </ul>
          </li>
          <li>Git</li>
          <li>VPS</li>
          <li>Linux</li>
          <li>Docker</li>
          <li>REST APIs</li>
          <li>CQRS</li>
          <li>Event Sourcing</li>
          <li>Agile Development</li>
          <li>Test Driven Development</li>
          <li>Domain Driven Development</li>
        </ul>
      </section>

      <section className="mt-8">
        <header className="leading-normal text-center md:text-left">
          <h2 className="text-4xl">Personal Roadmap</h2>
          <div className="text-xl mt-4">
            In case you are interested or wondering, this list contains
            technologies I would like to learn
          </div>
        </header>

        <ul className="mt-4 leading-loose">
          <li>Electron</li>
          <li>GraphQL</li>
          <li>Serverless Application</li>
          <li>Go</li>
          <li>C++</li>
          <li>C#</li>
          <li>.NET</li>
          <li>Python</li>
          <li>Ruby</li>
          <li>Rust</li>
          <li>Elixir</li>
          <li>Clojure</li>
          <li>Scala</li>
          <li>Kotlin</li>
          <li>RabbitMQ / Kafka</li>
          <li>Anything Game Development</li>
        </ul>
      </section>
    </Layout>
  );
}

export default AboutPage;
