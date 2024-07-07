import React from "react";
import styles from "./Section.module.css";
function Section({ title, children }) {

    return (
      <section>
        <h1 className={styles.titleStat}>{title}</h1>
        {children}
      </section>
    );
}
export default Section;