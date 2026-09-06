/**
 * SearchBar.jsx
 * Controlled search input component with live clearing and icon integration.
 */

import PropTypes from "prop-types";
import { Search, X } from "lucide-react";
import styles from "./UI.module.css";

export default function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = "Search recipes, ingredients...",
  className = "",
}) {
  return (
    <div className={`${styles.searchWrapper} ${className}`.trim()}>
      <Search className={styles.searchIcon} size={18} />
      <input
        type="text"
        className={styles.searchInput}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search recipes"
      />
      {value && (
        <button
          type="button"
          className={styles.clearBtn}
          onClick={onClear}
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
