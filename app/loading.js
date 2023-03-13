import React from "react";
import styles from "./styles.module.css";

export default function Loading() {
  return (
    <div className={styles.loaderwrapper}>
      <div className={styles.loader}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
}
