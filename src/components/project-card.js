import React from "react";
import PropTypes from "prop-types";
import Chip from "./chip";

function ProjectCard({ title, description, link, technologies }) {
  return (
    <li className="rounded shadow-md mt-8">
      <a
        href={link}
        className="inline-block w-full font-bold no-underline text-black text-xl px-6 pt-4 hover:text-underline"
      >
        {title}
      </a>

      <p
        className="whitespace-pre-wrap leading-normal text-grey-darker px-6 py-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="px-6 pb-4">
        {technologies.map(technology => (
          <Chip text={technology} />
        ))}
      </div>
    </li>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  technologies: PropTypes.array
};

export default ProjectCard;
