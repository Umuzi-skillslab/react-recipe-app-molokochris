import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

function NavLinks({ onNavigate, className }) {
  const location = useLocation();

  return (
    <nav className={className}>
      <Link
        to="/"
        className={`${styles.link} ${location.pathname === "/" ? styles.active : ""}`}
        onClick={onNavigate}
      >
        Home
      </Link>
      <Link
        to="/recipes"
        className={`${styles.link} ${location.pathname.includes("/recipes") ? styles.active : ""}`}
        onClick={onNavigate}
      >
        Recipes
      </Link>
      <Link
        to="/meal-planner"
        className={`${styles.link} ${location.pathname === "/meal-planner" ? styles.active : ""}`}
        onClick={onNavigate}
      >
        Meal Planner
      </Link>
      <Link
        to="/favorites"
        className={`${styles.link} ${location.pathname === "/favorites" ? styles.active : ""}`}
        onClick={onNavigate}
      >
        Favorites
      </Link>
    </nav>
  );
}

NavLinks.propTypes = {
  onNavigate: PropTypes.func,
  className: PropTypes.string,
};

export default function Navbar({ setIsOpen: setIsOpenProp }) {
  const [isOpen, setIsOpenState] = useState(false);

  const setIsOpen = (value) => {
    setIsOpenState(value);
    setIsOpenProp?.(value);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div
          className={styles.sidemenu}
          onClick={closeMenu}
          role="presentation"
        >
          <div
            className={styles.panel}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <NavLinks className={styles.mobileNav} onNavigate={closeMenu} />
          </div>
        </div>
      )}

      <header className={styles.header}>
        <div className={styles.nav}>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <Menu className={styles.menuIcon} />
          </button>

          <Link to="/" className={`oi-regular ${styles.logo}`} id="logo">
            Platr
          </Link>

          <NavLinks className={styles.desktopLinks} onNavigate={closeMenu} />
        </div>
      </header>
    </>
  );
}

Navbar.propTypes = {
  setIsOpen: PropTypes.func,
};
