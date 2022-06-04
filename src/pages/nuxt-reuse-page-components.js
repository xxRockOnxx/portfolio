import Layout from "../components/layout";
import SEO from "../components/seo";

export default function BlogPost() {
  return (
    <Layout>
      <SEO title="Nuxt - Reuse Page Components" />

      <h2 className="text-4xl font-bold">
        Nuxt - Reuse Page Components in 2 simple steps
      </h2>

      <p className="mt-8 text-xl leading-loose">
        Most of the time in a CRUD app, the Create page and Edit page are
        entirely the same. How do you reuse the same page component then if you
        are using{" "}
        <a href="https://nuxtjs.org/" className="text-green-500">
          Nuxt
        </a>
        ?
      </p>

      <p className="mt-8 text-xl leading-loose">
        Assuming you already have a "/create" page and wanted to reuse that
        page's component in "/edit/:name" route, here are 2 more steps you need
        to do:
      </p>

      <ol className="mt-8 text-xl leading-loose">
        <li>
          1 - Edit <code className="font-bold">nuxt.config.js</code> and add new
          route.
        </li>
        <li>2 - Handle the new route in the reused page component</li>
      </ol>

      <p className="mt-8 text-xl leading-loose">
        For the sake of brevity of this page, I made a codesandbox project.
        Check it out{" "}
        <a
          href="https://codesandbox.io/s/nuxt-reusing-page-component-7q1rr?file=/pages/create.vue"
          target="_blank"
          className="text-blue-500"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>

      <p className="mt-8 text-xl leading-loose">
        First, I created a <code className="font-bold">create.vue</code> page
        component which will then be reused by the "/edit/:name" route.
      </p>

      <p className="mt-8 text-xl leading-loose">
        Next, for context of the following explanation, check out{" "}
        <a
          href="https://codesandbox.io/s/nuxt-reusing-page-component-7q1rr?file=/nuxt.config.js"
          target="_blank"
          className="text-blue-500"
          rel="noreferrer"
        >
          nuxt.config.js
        </a>{" "}
        on codesandbox.
      </p>

      <p className="mt-8 text-xl leading-loose">
        So what does the <code className="font-bold">extendRoutes</code> at line
        50 there do?
      </p>

      <p className="mt-8 text-xl leading-loose">
        <code className="font-bold">extendRoutes</code> will receive 2
        arguments: all the route entries and a function for resolving a
        component. Since we created a "create.vue" page component, Nuxt will
        automatically register a route entry for that component which would look
        like:
      </p>

      <pre className="language-json mt-8 bg-gray-200 p-4">
        <code
          dangerouslySetInnerHTML={{
            __html:
              "{\n" +
              '  path: "/create",\n' +
              '  name: "create"\n' +
              "  component: &lt;the create.vue component&gt;\n" +
              "}",
          }}
        />
      </pre>

      <p className="mt-8 text-xl leading-loose">
        Now, all I have to do is find that "create" route, register the
        "/edit/:name" route, and use the component from "create" route.
      </p>

      <pre className="language-json mt-8 bg-gray-200 p-4">
        <code
          dangerouslySetInnerHTML={{
            __html:
              "extendRoutes(routes, resolve) {\n" +
              "  const createPage = routes.find(route => {\n" +
              '    return route.name === "create";\n' +
              "  });\n" +
              "\n" +
              "  routes.push({\n" +
              '    path: "/edit/:name",\n' +
              '    name: "edit",\n' +
              "    component: createPage.component\n" +
              "  });\n" +
              "}",
          }}
        />
      </pre>

      <p className="mt-8 text-xl leading-loose">
        Lastly, how can we tell from the "create.vue" if we're creating or
        editing?
      </p>

      <p className="mt-8 text-xl leading-loose">
        We just check the <code className="font-bold">$route</code> from the
        component and check the route name or path. And since we have access to
        the global <code className="font-bold">$route</code> object, we can also
        access the route params which is in this example, is the{" "}
        <code className="font-bold">name</code> and we'll be using it to
        populate our name input otherwise if it's not there, it's just empty.
      </p>

      <pre className="language-json mt-8 bg-gray-200 p-4">
        <code
          dangerouslySetInnerHTML={{
            __html: `&lt;script&gt;
export default {
  data() {
    return {
      name: this.$route.params.name
    };
  },

  computed: {
    pageTitle() {
      return this.$route.name === "create" ? "Create User" : "Edit User";
    }
  }
};
&lt;/script&gt;`,
          }}
        />
      </pre>

      <p className="mt-8 text-xl leading-loose">
        On a regular project though, it's usually an ID that you use when
        editing and then you'd fetch the data of the given ID from the server.
      </p>

      <p className="mt-8 text-xl leading-loose">
        You can also do that with Nuxt using the{" "}
        <code className="font-bold">asyncData()</code> option. Just check if
        you're entering an "/edit/:name" route, get the id, fetch, and return
        it.
      </p>

      <p className="mt-8 text-xl leading-loose">
        If you think that this strategy might cause confusion, my alternative
        suggestion would be to create another directory for reusable page
        components and add both the routes in{" "}
        <code className="font-bold">nuxt.config.js</code> and name the component{" "}
        <code className="font-bold">UserFormPage</code>.
      </p>
    </Layout>
  );
}
