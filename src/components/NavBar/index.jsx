import React from "react";
import styles from "./Navbar.module.css";
import searchIcon from "../../assets/search-icon.svg";
import emoji from "../../assets/emoji-icon.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img
        src={emoji}
        style={{ marginTop: 3 }}
        alt="Emoji Icon"
        className={styles.navIcon}
      />

      <span className={styles.navTitle}>Emoji Searcher</span>
      <img
        src={searchIcon}
        style={{ marginRight: 8 }}
        alt="Search Icon"
        className={styles.navIcon}
      />
    </nav>
  );
};

export default Navbar;
