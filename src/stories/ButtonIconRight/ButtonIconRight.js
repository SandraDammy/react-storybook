import React from "react";
import PropTypes from "prop-types";
import { options } from "../Button/constants";
import "../Button/Button.css";

export const ButtonIconRight = ({
  children = "Label",
  color = "normal",
  size = "md",
}) => {
  return <button className='button'>{children}</button>;
};

ButtonIconRight.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
};

export default ButtonIconRight;
