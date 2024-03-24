import React, { useState } from "react";
import styles from "./latest.module.css";
function Latest() {
  const [selectedFilter, setSelectedFilter] = useState("Today");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const collections = [
    {
      id: 1,
      image: "https://i.imgur.com/awvBYWO.png",
      collectionName: "Alien Cat",
      category: "Saqib Mahay",
      itm: "1",
    },
    {
      id: 2,
      image: "https://i.imgur.com/cKFsPmn.png",
      collectionName: "Project Example 0002",
      category: "Sandun Chathuranga",
      itm: "2",
    },
    {
      id: 3,
      image: "https://i.imgur.com/vx79wy6.png",
      collectionName: "Project Example 0003",
      category: "Ravindu",
      itm: "1",
    },
  ];

  return (
    <div className={styles.latestcontainer}>
      <div className={styles.textarea}>
        {" "}
        <h3>Latest collections</h3> <br></br>
        <p>
          {" "}
          New NFT Projects & Best Upcoming NFTs become a Top seller on Collectibles1. WE OFFER LAUNCHPADS UNDER SOLANA NETWORK, ETHEREUM AND POLYGON NETWORK WE GOT YOU COVERED An NFT Launchpad is a platform that enables the creation and launch of new NFT projects. It’s similar to an initial coin offering (ICO) or initial exchange offering (IEO), but instead of raising funds, NFT Launchpads offers a platform for artists, creators, and developers to launch their NFT projects.
        </p>
      </div>

      <div className={styles.lcollectionsContainer}>
        {selectedFilter === "Today" && (
          <div className={styles.lcardsSection}>
            {collections.map((card) => (
              <div key={card.id} className={styles.lcard}>
                <img src={card.image} alt={`Card ${card.id}`} />

                <div className={styles.lcollectionName}>{card.collectionName}</div>
                <div className={styles.lcardText}>
                  <div className={styles.lcategory}>{card.category}</div>
                  <div className={styles.litem}>{card.itm} Items</div>
                </div>

                {/* <div className={styles.live}>Follow</div> */}
              </div>
            ))}
          </div>
        )}
      </div>
      <button className={styles.viewall}>View All</button>
    </div>
  );
}

export default Latest;
