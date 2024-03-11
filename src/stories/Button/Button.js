import React from "react";
import PropTypes from "prop-types";
import { options } from "./constants";
import "./Button.css";
import classNames from "classnames";

export const Button = ({
  children = "Label",
  color = "normal",
  size = "md",
  isClickable,
  isDragable,
  isNormal,
  isHover,
  isPressed,
  isDisabled,
}) => {
  return (
    <button
      className={classNames("button", {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        "is-clickable": isClickable,
        "is-dragable": isDragable,
        "is-normal": isNormal,
        "is-hover": isHover,
        "is-pressed": isPressed,
        "is-disabled": isDisabled,
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
  isDragable: PropTypes.bool,
  isNormal: PropTypes.bool,
  isHover: PropTypes.bool,
  isPressed: PropTypes.bool,
  isDisabled: PropTypes.bool
};

export default Button;
