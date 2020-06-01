import Layout from "../components/layout";
import SEO from "../components/seo";
import React from "react";

function Article({ title, description, link }) {
  return (
    <li className="rounded border shadow-md mt-8">
      <div className="px-6 pt-6">
        <a
          href={link}
          className="inline-flex items-center font-bold tracking-wide no-underline text-xl hover:underline"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"/>
          </svg>
          <span className="ml-3">{title}</span>
        </a>
      </div>

      <p
        className="whitespace-pre-wrap leading-normal text-lg text-gray-600 px-6 py-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="px-6 pb-4">
        <a href={link} className="font-medium underline">Read More</a>
      </div>
    </li>
  );
}


export default function BlogPage() {
  return (
    <Layout>
      <SEO
        title="Blog"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="leading-normal pb-8">
        <header className="text-center md:text-left">
          <h2 className="text-4xl font-bold">Blog</h2>
        </header>

        <ul>
          <Article
            title="Nuxt - Reuse Page Components"
            description="A tutorial on how to reuse the same page component on different route with Nuxt.<br/>Common example is Create and Edit form page being the same."
            link="/nuxt-reuse-page-components"
          />

          <Article
            title="Vue - Extending Third Party Component templates"
            description="The component you need looks perfect but you need a tiny bit of changes and forking is overkill for the task. What do you do instead?"
            link="/vue-extending-third-party-component-templates"
          />

          <Article
            title="Vue - Overriding third-party defaults"
            description="Sometimes on some libraries you find yourself setting the same props to the same values over and over again but this can be solved by setting defaults."
            link="/vue-overriding-third-party-defaults"
          />
        </ul>
      </section>
    </Layout>
  )
}
