import Layout from "../components/layout";
import SEO from "../components/seo";

const projects = [
  {
    title: "Wordle Word Finder",
    description:
      "Simple app that finds 5 letter words given the good letters, bad letters, and letter positions.",
    link: "https://github.com/xxRockOnxx/wordle",
    technologies: ["Nuxt 3", "TailwindCSS"],
  },
  {
    title: "ai-upscaler",
    description:
      "A free online video upscaling service powered by Real-ESRGAN and FFMPEG.",
    link: "https://github.com/xxRockOnxx/ai-upscaler",
    technologies: ["Node.js", "Fastify", "XState", "Bull", "Redis"],
  },
  {
    title: "[npm] vue-aria-focus-trap",
    description: "A Vue.js component that implements WAI-ARIA focus trapping.",
    link: "https://github.com/xxRockOnxx/vue-aria-focus-trap",
    technologies: ["Vue"],
  },
  {
    title: "[npm] vue-headless-combobox",
    description:
      "A headless ComboBox Vue.js component that is fully accessible.",
    link: "https://github.com/xxRockOnxx/vue-headless-combobox",
    technologies: ["Vue"],
  },
  {
    title: "OBS Facebook Live Comments",
    description:
      "A free website that allows personal Facebook Live comments feed to be on your stream without creating a page.",
    link: "https://github.com/xxRockOnxx/obs-fb-live-comments",
    technologies: ["Javascript"],
  },
  {
    title: "3rdWheel",
    description:
      "A fun project I created for Valentine's day that allows people to register and look for third wheels for their Valentines.",
    link: "https://rdwheel.firebaseapp.com/",
    technologies: ["Nuxt", "Firebase", "TailwindCSS"],
  },
  {
    title: "Bandmate",
    description:
      "A Tinder-like app for musicians who are looking for others they can collaborate with.",
    link: "https://gitlab.com/captainskippah/bandmate",
    technologies: ["React Native", "Typescript", "Mobx", "InversifyJS"],
  },
];

function Chip({ text, ...props }) {
  let className =
    "inline-block h-8 px-4 text-sm font-semibold leading-8 text-gray-700 bg-gray-300 rounded-full";

  if (props.className) {
    className += ` ${props.className}`;
  }

  return <span className={className}>{text}</span>;
}

function ProjectCard({ title, description, link, technologies }) {
  return (
    <li className="mt-8 rounded border shadow-md">
      <div className="px-6 pt-6">
        <a
          href={link}
          className="inline-flex items-center text-xl font-bold tracking-wide no-underline hover:underline"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z" />
          </svg>
          <h2 className="ml-3">{title}</h2>
        </a>
      </div>

      <p
        className="whitespace-pre-wrap px-6 py-4 text-lg leading-normal text-gray-600"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="-mx-1 -mt-2 px-6 pb-6">
        {technologies.map((technology, index) => (
          <Chip className="mx-1 mt-2" text={technology} key={index} />
        ))}
      </div>
    </li>
  );
}

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects" />

      <h1 className="text-4xl font-bold">Projects</h1>

      <ul className="list-reset mt-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ul>
    </Layout>
  );
}
