import React from "react";
import styles from "./amazing.module.css";
function Amazing() {
  return (
    <div className={styles.amazingcontainer}>
      <div className={styles.contentcontainer}>
        <div className={styles.amrow}>
          <div className={styles.amtext}>
            <img src="https://i.imgur.com/ll0HoKd.png" className={styles.sign} />
            <h2>Amazing traditional Artworks, which is trending now</h2>

            <div className={styles.counterarea}>
              <div className={styles.counterbox}>
                <h4 className={styles.countcontent}>
                  <span className={styles.counter}>20</span>
                  <span>K+</span>
                </h4>

                <p className={styles.counttext}>Artwork</p>
              </div>

              <div className={styles.counterbox}>
                <h4 className={styles.countcontent}>
                  <span className={styles.counter}>130</span>
                  <span>K+</span>
                </h4>

                <p className={styles.counttext}>Auction</p>
              </div>

              <div className={styles.counterbox}>
                <h4 className={styles.countcontent}>
                  <span className={styles.counter}>14</span>
                  <span>K+</span>
                </h4>

                <p className={styles.counttext}>Artist</p>
              </div>
            </div>
          </div>
          <div className={styles.amimages}>
            <div className={styles.imgctrl}>
              <img src="https://i.imgur.com/iPBR0N7.png" className={styles.amstar} />
              <img src="https://i.imgur.com/gOfUEu7.jpg" className={styles.start} />
              <img src="https://i.imgur.com/TEuZboi.jpg" className={styles.marvel} />
              <img
                src="https://i.imgur.com/DM94Kch.png"
                className={styles.yellowcir}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amazing;
