import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Chip({ text, ...props }) {
  let className = "inline-block h-8 leading-8 bg-gray-300 rounded-full px-4 text-sm font-semibold text-gray-700";

  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <span className={className}>{text}</span>
  );
}

function ProjectCard({ title, description, link, technologies }) {
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

      <div className="px-6 pb-6 -mt-2 -mx-1">
        {technologies.map((technology, index) => (
          <Chip className="mt-2 mx-1" text={technology} key={index} />
        ))}
      </div>
    </li>
  );
}

export default function() {
  const projects = [
    {
      title: "OBS Facebook Live Comments",
      description: "A free website that allows personal Facebook Live comments feed to be on your stream without creating a page.",
      link: "https://github.com/xxRockOnxx/obs-fb-live-comments",
      technologies: ["Javascript"]
    },
    {
      title: "3rdWheel",
      description: "A fun project I created for Valentine's day that allows people to register and look for third wheels for their Valentines.",
      link: "https://rdwheel.firebaseapp.com/",
      technologies: ["Nuxt", "Firebase", "TailwindCSS"]
    },
    {
      title: "Merchandise Inventory/Accounting software",
      description: "CQRS is used here to provide different report views and Event Sourcing to have a history of the cash flow and the intent of the user.",
      link: "https://gitlab.com/captainskippah/hbph",
      technologies: ["Nuxt", "Lumen", "Event Sourcing", "CQRS", "DDD"]
    },
    {
      title: "Bandmate",
      description:
        "A Tinder-like app for musicians who are looking for others they can collaborate with.",
      link: "https://gitlab.com/captainskippah/bandmate",
      technologies: ["React Native", "Typescript", "Mobx", "InversifyJS"]
    }
  ];

  return (
    <Layout>
      <SEO title="Projects" />

      <h1 className="text-4xl font-bold">Projects</h1>

      <ul className="mt-4 list-reset">
        {projects.map(project => (
          <ProjectCard {...project} />
        ))}
      </ul>
    </Layout>
  );
}
