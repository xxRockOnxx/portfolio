import React from "react";
import PropTypes from "prop-types";

function Chip({ text }) {
  return (
    <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-3">
      {text}
    </span>
  );
}

Chip.propTypes = {
  text: PropTypes.string
};

export default Chip;
