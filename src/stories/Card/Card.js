import React from "react";
import PropTypes from "prop-types";
import { options } from "./constants";
import "./Card.css";
/*npm install classnames*/
import classNames from 'classnames'

export const Card = ({ children = "Label", color = "normal", size = "md" }) => {
  return (
    <div
      className={classNames("Card", {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
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
};

export default Card;
