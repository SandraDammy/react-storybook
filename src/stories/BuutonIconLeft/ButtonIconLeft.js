import React from "react";
import PropTypes from "prop-types";
import { options } from "../Button/constants";
import "../Button/Button.css";

export const ButtonIconLeft = ({
  children = "Label",
  color = "normal",
  size = "md",
}) => {
  return (
    <button className="button">
      {children} 
      <div>Icon</div>
    </button>
  );
};

ButtonIconLeft.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
};

export default ButtonIconLeft;
