import { Mail, Globe, Share2 } from "lucide-react";
import styles from "./common.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footerGrid}>
          <div>
            <span className={styles.footerTitle}>Platr</span>
            <p>Elevating your daily meal planning with simplicity and style.</p>
          </div>
          <div className={styles.footerLinks}>
            <span className={styles.footerTitle}>Support</span>
            <a href="#help">Help Center</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
          <div>
            <span className={styles.footerTitle}>Social</span>
            <div className={styles.socials}>
              <a href="#share" aria-label="Share">
                <Share2 size={20} />
              </a>
              <a href="#web" aria-label="Website">
                <Globe size={20} />
              </a>
              <a href="#mail" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copy}>© 2024 Platr Inc. Freshly Prepared.</div>
      </div>
    </footer>
  );
}
