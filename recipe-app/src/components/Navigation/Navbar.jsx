import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CircleUser, Menu, X } from "lucide-react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/recipes", label: "Recipes" },
  { to: "/meal-planner", label: "Meal Planner" },
  { to: "/favorites", label: "Favorites" },
];

export default function Navbar({ setIsOpen: setIsOpenProp }) {
  const [isOpen, setIsOpenState] = useState(false);

  const setIsOpen = useCallback(
    (value) => {
      setIsOpenState(value);
      setIsOpenProp?.(value);
    },
    [setIsOpenProp],
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, setIsOpen]);

  const closeMenu = () => setIsOpen(false);

  const linkClassName = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

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
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <nav className={styles.mobileNav} aria-label="Mobile">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={linkClassName}
                  onClick={closeMenu}
                  end={link.to === "/"}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}

      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main">
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

          <div className={styles.desktopLinks}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClassName}
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <CircleUser className={styles.avatar} aria-hidden="true" />
        </nav>
      </header>
    </>
  );
}

Navbar.propTypes = {
  setIsOpen: PropTypes.func,
};
