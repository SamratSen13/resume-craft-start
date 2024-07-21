import React from "react";
import styles from "./Header.module.css";
import resumeSvg from "../../assets/resume_builder.svg";

function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
      <p className={styles.heading}>
        A <span>Resume</span> that Stands Out!
      </p>
      <p className={styles.heading}>
        Make your own resume. <span>It's free</span>{" "}
      </p>
        </div>
        <div className={styles.right}>
            <img src={resumeSvg} alt="Resume" />
        </div>
    </div>
  );
}

export default Header;
