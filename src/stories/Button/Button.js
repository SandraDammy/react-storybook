import React from "react";
import PropTypes from "prop-types";
import { options } from "./constants";
import "./Button.css";
import classNames from 'classnames'


export const Button = ({
  children = "Label",
  color = "normal",
  size = "md",
}) => {
  return <button className={classNames("button", {
    [`color-${color}`]: color,
    [`size-${size}`]: size,
  })}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
};

export default Button;
