/**
 * Button.jsx
 * Reusable Button component supporting multiple variants, sizes, and icon compositions.
 */

import PropTypes from "prop-types";
import styles from "./UI.module.css";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
  ariaLabel,
  ...props
}) {
  const variantClass = styles[variant] || styles.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${styles.btn} ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  /** Button content / label or icons */
  children: PropTypes.node.isRequired,
  /** Click event handler */
  onClick: PropTypes.func,
  /** HTML button type */
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  /** Visual variant */
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "ghost", "iconBtn"]),
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Optional extra CSS classes */
  className: PropTypes.string,
  /** Accessibility label */
  ariaLabel: PropTypes.string,
};
