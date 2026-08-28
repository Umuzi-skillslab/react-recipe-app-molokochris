import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen && (
        <div className={styles.sidemenu}>
          <div
            style={{
              width: "50%",
              height: "100%",
              backgroundColor: "red",
            }}
          >
            side menu
            <button onClick={() => setIsOpen(false)}>close</button>
          </div>
        </div>
      )}
      <header>
        <nav>
          <Menu className={styles.menuIcon} onClick={() => setIsOpen(true)} />
          <Link to={"/"} className="oi-regular" id="logo">
            Platr
          </Link>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor: "green",
            }}
          />
        </nav>
      </header>
    </>
  );
}
