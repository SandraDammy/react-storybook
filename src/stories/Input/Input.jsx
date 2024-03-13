// Input.jsx
import React from "react";
import PropTypes from "prop-types";
import { options } from "./constants";
import classNames from "classnames";
import styles from "./Input.module.css"; // Import CSS module
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

const Input = ({
  children = "Label",
  color = "normal",
  size = "md",
  leftIcon,
  rightIcon,
  // isClickable,
  // isDraggable,
  // isNormal,
  // isHover,
  // isPressed,
  // isDisabled
}) => {
  return (
    <div className={styles.InputWrapper}>
      {/* {leftIcon && (
        <span className={styles.IconLeft}>
          <FontAwesomeIcon icon={faUser} />
        </span>
      )}{" "} */}
      <span className="IconLeft">Icon</span>
      <input
        className={classNames(styles.Input, {
          [styles[`color-${color}`]]: color,
          [styles[`size-${size}`]]: size,
          // [styles["is-clickable"]]: isClickable,
          // [styles["is-draggable"]]: isDraggable,
          // [styles["is-normal"]]: isNormal,
          // [styles["is-hover"]]: isHover,
          // [styles["is-pressed"]]: isPressed,
          // [styles["is-disabled"]]: isDisabled,
        })}
        type="text" // or any other type you want
        placeholder={children}
      />
       <span className="IconRight">Icon</span>
      {/* {rightIcon && (
        <span className={styles.IconLeft}>
          <FontAwesomeIcon icon={faUser} />
        </span>
      )}{" "} */}
    </div>
  );
};

Input.propTypes = {
  children: PropTypes.string.isRequired, // Changed from PropTypes.node to PropTypes.string since it represents placeholder text
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  // isClickable: PropTypes.bool,
  // isDraggable: PropTypes.bool,
  // isNormal: PropTypes.bool,
  // isHover: PropTypes.bool,
  // isPressed: PropTypes.bool,
  // isDisabled: PropTypes.bool
};

export default Input;
