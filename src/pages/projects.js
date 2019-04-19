import React from "react";

import Layout from "../components/layout";
import ProjectCard from "../components/project-card";
import SEO from "../components/seo";

function ProjectsPage() {
  const projects = [
    {
      title: "Bandmate",
      description:
        "This is my personal project idea.\nA Tinder-like app for musicians who are looking for others they can collaborate with.",
      link: "https://gitlab.com/captainskippah/bandmate",
      technologies: ["Koa", "Typescript", "TypeORM", "InversifyJS", "Flutter"]
    },
    {
      title: "Monjayfer API",
      description:
        "The backend for Monjayfer website.\nPracticed applying Domain Driven Design on this project.\nEven though the frontend would be on a different server, Session auth was still used in favor of simplicity.",
      link: "https://gitlab.com/captainskippah/monjayfer-api",
      technologies: ["Lumen", "Domain Driven Design (DDD)", "CQRS"]
    },
    {
      title: "Monjayfer UI",
      description:
        "The frontend for Monjayfer website.\nThe public page was generated using <code>nuxt:generate</code> and the admin pages were rendered on the server side.\nSince the backend offers Session auth only for simplicity and the website is hosted on a different domain, CORS problem was solved as simple as using the http-proxy-middleware only.",
      link: "https://gitlab.com/captainskippah/monjayfer-ui",
      technologies: ["Nuxt", "Vuetify", "Express"]
    },
    {
      title: "Vetline",
      description:
        "This project is where I first started to practice Test Driven Development with PHPUnit and Extreme Programming... writing codes that are needed at the moment only and nothing more.\nVue was used here as a SPA and Nuxt wasn't a thing back then.",
      link: "https://gitlab.com/captainskippah/vetline",
      technologies: ["Laravel", "Vue", "Test Driven Development (TDD)"]
    }
  ];

  return (
    <Layout>
      <SEO title="Projects" />

      <header>
        <h2 className="text-4xl">Projects</h2>
        <div className="text-xl mt-4">
          These are all personal projects that exists in my GitLab repository.
          <br />I have no access to some old remote projects anymore.
        </div>
      </header>

      <ul className="mt-4 list-reset">
        {projects.map(project => (
          <ProjectCard {...project} />
        ))}
      </ul>
    </Layout>
  );
}

export default ProjectsPage;
