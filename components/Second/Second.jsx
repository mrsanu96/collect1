import React, { useState } from "react";

import styles from "./second.module.css";


function Second() {

return(


<div className={styles.secondContainer}>
  <div className="">
    <img
      src="https://i.imgur.com/guL00or.png"
      alt="main.dot"
      className={styles.herodot1}
    />

    <img
      src="https://i.imgur.com/f1AtuyB.png"
      alt="main.dot"
      className={styles.herodot2}
    />

    <img
      src="https://i.imgur.com/uAU5UZB.png"
      alt="main.dot"
      className={styles.heronet2}
    />

    <img
      src="https://i.imgur.com/drv5YC5.png"
      alt="main.dot"
      className={styles.heronet1}
    />

    <span className={styles.coordinates}></span>
  </div>
  <div className={styles.star1}>
    <img src="https://i.imgur.com/08FxWfJ.png" />
  </div>
  <div className={styles.text1}>Welcome to Collectible1 .</div>
  <div className={styles.text2}>
    <h1 className={styles.heroheading}>
      WHERE
      <span class={styles.shimmer}>
        YOU CAN SELL, BUY, BID AND COLLECT EXTRAORDINARY NFTs
        <img
          src="https://i.imgur.com/LnjS13Q.png"
          className={styles.herolineshape}
        />
      </span>
      COLLECTIBLES1 IS THE PEOPLES WEBSITE FOR NFTs
    </h1>
  </div>
  <div className={styles.twobtns}>
    <button className={styles.explore}>Explore</button>
    <button className={styles.learnmore}>Learn More</button>
  </div>
  <div className={styles.downbtn}>
    {" "}
    <a
      id="down-arrow"
      href="#goBottomSection"
      className={styles.jsscrolltrigger}
    >
      <img src="https://i.imgur.com/ySVKiMP.png" alt="arrow" />
    </a>
  </div>
</div>
);
}
export default Second;