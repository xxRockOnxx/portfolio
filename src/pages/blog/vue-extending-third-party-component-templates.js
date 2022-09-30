import { Disqus } from "gatsby-plugin-disqus";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { Helmet } from "react-helmet";

export default function BlogPost() {
  return (
    <Layout>
      <SEO
        title="Vue - Extending Third Party Component templates"
        description="You found this library and it does exactly what you need however you want to change a minor detail. What do you do?"
      />

      <h1 className="text-4xl font-bold">
        Vue - Extending Third Party Component templates
      </h1>

      <p className="mt-8 text-xl leading-loose">
        You found this library and it does exactly what you need however you
        want to change a minor detail.
        <br />
        There's 2 options that comes to mind here:
      </p>

      <ol className="mt-8 text-xl leading-loose">
        <li>1 - You fork it and do whatever you need.</li>
        <li>
          2 - Get over it. It's not a blocker and can't be bothered forking it.
        </li>
      </ol>

      <p className="mt-8 text-xl leading-loose">
        In my previous article{" "}
        <a
          href="/vue-overriding-third-party-defaults"
          className="text-blue-500 underline"
        >
          Vue - Overriding Third Party Defaults
        </a>
        , we found out that default Props can be overridden. Just like{" "}
        <code className="font-bold">props</code>,{" "}
        <code className="font-bold">template</code> is just another key in a Vue
        component object.
      </p>

      <p className="mt-8 text-xl leading-loose">
        Let us use{" "}
        <a href="https://vue-select.org/" className="text-blue-500 underline">
          vue-select
        </a>{" "}
        as an example again.
      </p>

      <p className="mt-8 text-xl leading-loose">
        In a previous project of mine, the client wanted a bit more of
        functionality from the vue-select. They wanted vue-select to:
      </p>

      <ul className="mt-8 text-xl leading-loose list-disc list-inside ">
        <li>have slide animation</li>
        <li>go upwards if not within viewport.</li>
      </ul>

      <p className="mt-8 text-xl leading-loose">
        The problem is although vue-select exposes a "transition" prop, it does
        not do what is needed. You can probably fake the sliding down by setting
        CSS max-height from 0 to 999px but it does not solve the going upwards
        problem.
      </p>

      <p className="mt-8 text-xl leading-loose">
        There are many ways to solve this problem, one of them being the
        max-height trick, and for the going upwards, maybe just add some
        javascript on the containing component.
      </p>

      <p className="mt-8 text-xl leading-loose">
        I decided to fix this in the root and also because I wanted to use{" "}
        <a href="http://velocityjs.org" className="text-blue-500 underline">
          VelocityJS
        </a>{" "}
        for the sliding. So here's how I did it:
      </p>

      <pre className="p-4 mt-8 bg-gray-200 language-json">
        <code
          dangerouslySetInnerHTML={{
            __html:
              "import VueSelect from 'vue-select'\n" +
              "import Velocity from 'velocity-animate'\n\n" +
              "const originalData = VueSelect.data\n" +
              "const originalRender = VueSelect.render\n" +
              "const originStateClasses = VueSelect.computed.stateClasses\n\n" +
              "VueSelect.computed.stateClasses = function() {\n" +
              "  return {\n" +
              "    'vs--upwards': this.upwards,\n" +
              "    ...originalStateClasses.call(this)\n" +
              "  }\n" +
              "}\n\n" +
              "VueSelect.render = function(h) {\n" +
              "  const rendered =  originalRender.call(this, h)\n" +
              "\n" +
              "  const transitionComponent = rendered.children.find(c => {\n" +
              "    return c.componentOptions && c.componentOptions.tag === 'transition'\n" +
              "  })\n" +
              "\n" +
              "  transitionComponent.componentOptions.propsData = {\n" +
              "    css: false\n" +
              "  }\n" +
              "\n" +
              "  transitionComponent.componentOptions.listeners = {\n" +
              "    enter: (el, done) => {\n" +
              '      Velocity(el, "slideDown", {\n' +
              "        duration: 300,\n" +
              "        complete: done,\n" +
              "        begin: () => {\n" +
              "          const rect = el.getBoundingClientRect();\n" +
              "          const withinViewPort = rect.top + rect.height < window.innerHeight\n" +
              "          this.upwards = !withinViewPort\n" +
              "        }\n" +
              "      })\n" +
              "    },\n" +
              "\n" +
              "    leave: (el, done) => {\n" +
              '      Velocity(el, "slideUp", {\n' +
              "        duration: 300,\n" +
              "        complete: done\n" +
              "      })\n" +
              "    },\n" +
              "\n" +
              "    afterLeave: (el) => {\n" +
              "      this.upwards = false\n" +
              "    }\n" +
              "  }\n" +
              "\n" +
              "  return rendered\n" +
              "}",
          }}
        />
      </pre>

      <p className="mt-8 text-xl leading-loose">
        First, I copied all the original properties that we're going to extend
        because otherwise we'll have to completely rewrite the same thing again,
        apart from the new stuff.
      </p>

      <p className="mt-8 text-xl leading-loose">
        Next, I added another CSS class called{" "}
        <code className="font-bold">vs--upwards</code> which I'm going to style
        when the dropdown goes upwards, and added all the original computed
        classes by appending the result of the original computed function.
      </p>

      <p className="mt-8 text-xl leading-loose">
        We have to call the original function by doing{" "}
        <code className="font-bold">originalFn.call(this)</code> instead of{" "}
        <code className="font-bold">originalFn()</code> because we need to pass
        the context or "this".
      </p>

      <p className="mt-8 text-xl leading-loose">
        Next, on the render function, we store the return value of the original
        render which would be a VNode.{" "}
        <a
          href="https://vuejs.org/v2/api/#render"
          target="_blank"
          className="text-green-500"
          rel="noreferrer"
        >
          Read more
        </a>
        .
      </p>

      <p className="mt-8 text-xl leading-loose">
        Now we have the VNode that contains the original structure of the
        component or the{" "}
        <code className="font-bold">
          <template />
        </code>{" "}
        part of a Vue SFC.
      </p>

      <div className="mt-8 text-xl leading-loose">
        Going back to the problem, we know that using CSS transition is not
        going to work. According to Vue's transition{" "}
        <a
          href="https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks"
          className="text-green-500"
        >
          docs
        </a>
        , we can take advantage of the JavaScript hooks where we can use
        VelocityJS.
      </div>

      <div className="mt-8 text-xl leading-loose">
        And from there, we just add our Sliding logic and if it's going to be
        upwards or not, and return the new VNode.
      </div>

      <p className="my-8 text-xl leading-loose">
        You didn't have to fork, and you got what you wanted in a couple lines
        of codes. Win-Win!
      </p>

      <p
        className="codepen"
        data-height="265"
        data-theme-id="dark"
        data-default-tab="js,result"
        data-user="captainskippah"
        data-slug-hash="QWyLgZM"
        data-preview="true"
        style={{
          height: "320px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid",
          margin: "1em 0",
          padding: "1em",
        }}
        data-pen-title="Vue - Extending third-party component template"
      >
        <span>
          See the Pen{" "}
          <a href="https://codepen.io/captainskippah/pen/QWyLgZM">
            Vue - Extending third-party component template
          </a>{" "}
          by Lemuel Flores (
          <a href="https://codepen.io/captainskippah">@captainskippah</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </span>
      </p>

      <Helmet>
        <script async src="https://static.codepen.io/assets/embed/ei.js" />
      </Helmet>

      <div className="mt-20">
        <Disqus
          config={{
            identifier: "vue-extending-third-party-component-templates",
            title: "Vue - Extending Third Party Component templates",
          }}
        />
      </div>
    </Layout>
  );
}
