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

      <section className="leading-normal pb-8 border-b">
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

      <section className="mt-8">
        <header className="leading-normal text-center md:text-left">
          <h2 className="text-4xl">Skills and Experience</h2>
        </header>

        <ul className="mt-4 leading-loose">
          <li>
            PHP
            <ul>
              <li>Laravel / Lumen</li>
              <li>Doctrine</li>
              <li>PHPUnit</li>
            </ul>
          </li>
          <li>
            Javascript
            <ul>
              <li>Typescript</li>
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
                  <li>Gatsby</li>
                  <li>React Native</li>
                </ul>
              </li>
              <li>
                NodeJS
                <ul>
                  <li>Koa</li>
                  <li>Express</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>VPS</li>
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

export default AboutPage;
