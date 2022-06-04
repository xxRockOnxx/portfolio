import Layout from "../components/layout";
import SEO from "../components/seo";

export default function BlogPost() {
  return (
    <Layout>
      <SEO title="Vue - Overriding Third-Party Defaults" />

      <h2 className="text-4xl font-bold">
        Vue - Overriding Third-Party Defaults
      </h2>

      <p className="mt-8 text-xl leading-loose">
        Sometimes on some libraries you find yourself setting the same props to
        the same values over and over again. Let us use{" "}
        <a href="https://vue-select.org/" className="text-blue-500 underline">
          vue-select
        </a>{" "}
        as an example.
      </p>

      <p className="mt-8 text-xl leading-loose">
        Imagine we have an API that returns an array of objects that looks like:
      </p>

      <pre className="language-json mt-8 bg-gray-200 p-4">
        <code
          dangerouslySetInnerHTML={{
            __html:
              "{\n" +
              '  "users": [\n' +
              "    {\n" +
              '      "user_id": 1001\n' +
              '      "name": "John Doe"\n' +
              "    },\n" +
              "    {\n" +
              '      "user_id": 1002\n' +
              '      "name": "James Smith"\n' +
              "    }\n" +
              "  ]\n" +
              "}",
          }}
        />
      </pre>

      <p className="mt-8 text-xl leading-loose">
        and that this User Dropdown field is required and want to make it
        selectable when you press the Tab key. This is really simple to do, all
        you have to do is import the component and change it like so:
      </p>

      <pre className="language-js mt-8 bg-gray-200 p-4">
        <code
          dangerouslySetInnerHTML={{
            __html:
              "import VueSelect from 'vue-select'\n\n" +
              "VueSelect.props.clearable.default = false\n" +
              "VueSelect.props.getOptionKey.default = 'user_id'\n" +
              "VueSelect.props.getOptionLabel.default = 'name'",
          }}
        />
      </pre>

      <p className="mt-8 text-xl leading-loose">
        So how does that work? Vue components are just plain objects and what we
        did above is we mutated that object. You can simply place that in your{" "}
        <code className="font-bold underline">index.js</code> file and you don't
        have to keep on setting the same props over and over.
      </p>

      <p className="mt-8 text-xl leading-loose">
        BUT what if you want 2 versions that you regularly use? Maybe we have{" "}
        <code className="font-bold underline">public</code> and{" "}
        <code className="font-bold underline">admin</code> pages that requires 2
        different version of defaults?
      </p>

      <p className="mt-8 text-xl leading-loose">
        If they differ only by 1 or 2 props, then maybe just live with always
        setting that single prop. <br />
        If not or you're just lazy, then doing the above <strong>
          may
        </strong> or <strong>may not</strong> work.
      </p>

      <p className="mt-8 text-xl leading-loose">
        If both your public and admin page lives on the same build, doing the
        above will not work because you'd be mutating the same object. That's
        basically how <code className="font-bold underline">node_modules</code>{" "}
        work but I won't get deeper into it.
      </p>

      <div className="mt-8 text-xl leading-loose">
        If not, then you're in luck because most likely those 2 build might be
        built from a separate task, but if you are then here's how it can be
        solved:
      </div>

      <pre className="language-js mt-8 bg-gray-200 p-4">
        <code
          dangerouslySetInnerHTML={{
            __html:
              "import VueSelect from 'vue-select'\n\n" +
              "const AdminSelect = { ...VueSelect }\n" +
              "AdminSelect.props.clearable.default = false\n" +
              "AdminSelect.props.taggable.default = true\n\n" +
              "const PublicSelect = { ...VueSelect }\n" +
              "PublicSelect.props.selectOnTab.default = true\n\n" +
              "export default { AdminSelect, PublicSelect }",
          }}
        />
      </pre>

      <p className="mt-8 text-xl leading-loose">
        Instead of mutating the component directly, we just copy the component
        instead and change the props accordingly. Now you just simply import
        what kind of VueSelect you need and type less props.
      </p>

      <p className="mt-8 text-xl leading-loose">
        No need for a wrapper component. Less complex and effective.
      </p>
    </Layout>
  );
}
