import React from "react";
import PropTypes from "prop-types";
import { options } from "./constants";
import "./Card.css";
/*npm install classnames*/
import classNames from "classnames";

export const Card = ({
  children = "Label",
  color = "normal",
  size = "md",
  isClickable,
 isDraggable,
  isNormal,
  isHover,
  isPressed,
  isDisabled
}) => {
  return (
    <div
      className={classNames("Card", {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        "is-clickable": isClickable,
        "is-draggable": isDraggable,
        "is-normal": isNormal,
        "is-hover": isHover,
        "is-pressed": isPressed,
        "is-disabled": isDisabled
      })}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
 isDraggable: PropTypes.bool,
  isNormal: PropTypes.bool,
  isHover: PropTypes.bool,
  isPressed: PropTypes.bool,
  isDisabled: PropTypes.bool
};

export default Card;
