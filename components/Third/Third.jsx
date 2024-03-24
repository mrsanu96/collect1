import React, { useState } from "react";

import styles from "./third.module.css";


function Third() {

return(


<div className={styles.thirdcontainer}>
<div className={styles.sectiontitle}>
  <h2 className={styles.sectionheading}>
    Collectibles1 Top NFT Creators and designers all in one place.
  </h2>

  <p className={styles.sectionsubheading}>
    An NFT (non-fungible token) Is a unique digital item stored on a blockchain. NFTs can represent almost anything, And serve as a digital record of ownership. NFTs come in the form of Art, Pictures, Collectibles, Music (beats), Trading card, Sports, Games, photographs, virtual worlds, Comics, The list is ever-changing. New and emerging use cases include identity verification, intellectual property, and storage solutions. Metamask or any of the wallets from Collectibles1 will help you out.
  </p>
</div>
<br></br>
<br></br>
<div className={styles.videos}>
<div className={styles.videoWrapper}>
    <iframe
    className={styles.video}
      src="https://www.youtube.com/embed/W4ZDf7obePg?autoplay=1&amp;mute=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <br></br>
  <br></br>
  <div className={styles.videoWrapper}>
    <iframe
     className={styles.video}
      src="https://www.youtube.com/embed/LQdABwZFYzo?autoplay=1&amp;mute=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen=""
    ></iframe>
  </div>
</div>
</div>

);
}
export default Third;