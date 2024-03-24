import React from "react";
import styles from "./join.module.css";
function Join() {
  return (
    <div className={styles.jcontainer}>
      <div className={styles.jimgcontainer}>
       
        <div className={styles.jtextarea}>
          <h2 className={styles.getstart}>Get started with us today</h2>
          <p className={styles.getsub}>
          Join our (Family) Be part of our community. Check out our <a className={styles.blueLink} href="https://discord.gg/jhCsFVnp" target="_blank" rel="noopener noreferrer" color="#blue">discord</a> Find us on <a className={styles.blueLink} href="https://twitter.com/Collect91783302" target="_blank" rel="noopener noreferrer"> X </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Join;
