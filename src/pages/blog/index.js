import Layout from "../../components/layout";
import SEO from "../../components/seo";

function Article({ title, description, link }) {
  return (
    <article className="mt-8 rounded border shadow-md">
      <header className="px-6 pt-6">
        <a
          href={link}
          className="inline-flex items-center text-xl font-bold tracking-wide no-underline hover:underline"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z" />
          </svg>
          <h1 className="ml-3">{title}</h1>
        </a>
      </header>

      <p
        className="whitespace-pre-wrap px-6 py-4 text-lg leading-normal text-gray-600"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="px-6 pb-4">
        <a href={link} className="font-medium underline">
          Read More
        </a>
      </div>
    </article>
  );
}

export default function BlogPage() {
  return (
    <Layout>
      <SEO title="Blog" />

      <section className="pb-8 leading-normal">
        <header className="text-center md:text-left">
          <h1 className="text-4xl font-bold">Blog</h1>
        </header>

        <Article
          title="Nuxt - Reuse Page Components"
          description="A tutorial on how to reuse the same page component on different route with Nuxt.<br/>Common example is Create and Edit form page being the same."
          link="/blog/nuxt-reuse-page-components"
        />

        <Article
          title="Vue - Extending Third Party Component templates"
          description="The component you need looks perfect but you need a tiny bit of changes and forking is overkill for the task. What do you do instead?"
          link="/blog/vue-extending-third-party-component-templates"
        />

        <Article
          title="Vue - Overriding third-party defaults"
          description="Sometimes on some libraries you find yourself setting the same props to the same values over and over again but this can be solved by setting defaults."
          link="/blog/vue-overriding-third-party-defaults"
        />
      </section>
    </Layout>
  );
}
