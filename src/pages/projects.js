import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Chip({ text, ...props }) {
  let className = "inline-block bg-grey-light rounded-full px-3 py-1 text-sm font-semibold text-grey-darker";

  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <span className={className}>{text}</span>
  );
}

function ProjectCard({ title, description, link, technologies }) {
  return (
    <li className="rounded shadow-md mt-8">
      <div className="px-6 pt-6">
        <a
          href={link}
          className="inline-flex items-center font-bold no-underline text-black text-xl hover:underline"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"/>
          </svg>
          <span className="ml-3">{title}</span>
        </a>
      </div>

      <p
        className="whitespace-pre-wrap leading-normal text-lg text-grey-darker px-6 py-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="px-6 pb-6">
        {technologies.map((technology, index) => (
          <Chip className={index === 0 ? "" : "ml-3"} text={technology} key={index} />
        ))}
      </div>
    </li>
  );
}

export default function() {
  const projects = [
    {
      title: "HappyBeauty PH",
      description: "Merchandise Inventory/Accounting software.\nCQRS is used here to provide different report views and Event Sourcing to have a history of the cash flow and the intent of the user.",
      link: "https://gitlab.com/captainskippah/hbph",
      technologies: ["Lumen", "Nuxt", "Event Sourcing", "CQRS", "DDD"]
    },
    {
      title: "Bandmate",
      description:
        "A Tinder-like app for musicians who are looking for others they can collaborate with.",
      link: "https://gitlab.com/captainskippah/bandmate",
      technologies: ["React Native", "Typescript", "Mobx", "InversifyJS"]
    },
    {
      title: "Monjayfer API",
      description:
        "The backend for Monjayfer website.\nPracticed applying concept Domain Driven Design on this project.\nThis is a system for a veterinary clinic to track pet records, client appointments, and also a basic POS system for selling products onsite.",
      link: "https://gitlab.com/captainskippah/monjayfer-api",
      technologies: ["Lumen", "Domain Driven Design (DDD)", "CQRS"]
    },
    {
      title: "Monjayfer UI",
      description:
        "The frontend for Monjayfer website.\nThe public page was a static generated page and the admin pages were server side rendered.",
      link: "https://gitlab.com/captainskippah/monjayfer-ui",
      technologies: ["Nuxt", "Vuetify", "Express"]
    },
    {
      title: "Vetline",
      description:
        "This project is a system for a veterinary clinic to track pet records and client appointments and also a reservation system for their \"Pet Hotel\".\nThis is when I first started to practice Test Driven Development and Extreme Programming.\nVue was used here as a SPA and Nuxt wasn't a thing back then.",
      link: "https://gitlab.com/captainskippah/vetline",
      technologies: ["Laravel", "Vue", "Test Driven Development (TDD)"]
    },
    {
      title: "Drs. Sarmiento",
      description: "My first project with Laravel.\nYou can compare my current progress with this project and see how different I write my codes now.",
      link: "https://gitlab.com/captainskippah/drs-sarmiento-system",
      technologies: ["Laravel", "Semantic UI"]
    }
  ];

  return (
    <Layout>
      <SEO title="Projects" />

      <h1 className="text-4xl">Projects</h1>

      <ul className="mt-4 list-reset">
        {projects.map(project => (
          <ProjectCard {...project} />
        ))}
      </ul>
    </Layout>
  );
}
