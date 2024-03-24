import React, { useState } from "react";
import styles from "./top.module.css";
function TopArtist() {
  const [selectedFilter, setSelectedFilter] = useState("Today");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const collections = [
    {
      id: 1,
      image: "https://i.imgur.com/awvBYWO.png",
      collectionName: "Saqib Mahay",
      category: "Top Artists",
      prc: "10.42%",
    },
    {
      id: 2,
      image: "https://i.imgur.com/cKFsPmn.png",
      collectionName: "Project Example 0002",
      category: "Top Artists",
      prc: "10.42%",
    },
    {
      id: 3,
      image: "https://i.imgur.com/vx79wy6.png",
      collectionName: "Project Example 0003",
      category: "Top Artists",
      prc: "10.42%",
    },
  ];

  return (
    <div className={styles.topartistcontainer}>
      <div className={styles.handle}>
        <div className={styles.leftSide}>
          <h3>Top Artists</h3>
        </div>
        <div className={styles.rightside}>
          <div className={styles.filterOptions}>
            <p
              className={selectedFilter === "Today" ? "active" : ""}
              onClick={() => handleFilterClick("Today")}
            >
              Today
            </p>
            <p
              className={selectedFilter === "This Month" ? "active" : ""}
              onClick={() => handleFilterClick("This Month")}
            >
              This Month
            </p>
            <p
              className={selectedFilter === "This Year" ? "active" : ""}
              onClick={() => handleFilterClick("This Year")}
            >
              This Year
            </p>
          </div>
        </div>
      </div>
      <div className={styles.collectionsContainer}>
        {selectedFilter === "Today" && (
          <div className={styles.cardsSection}>
            {collections.map((card) => (
              <div key={card.id} className={styles.card}>
                <img src={card.image} alt={`Card ${card.id}`} />
                <div className={styles.cardText}>
                  <p className={styles.collectionName}>{card.collectionName}</p>
                  <p className={styles.category}>{card.category}</p>
                </div>

                <div className={styles.live}>Follow</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <button className={styles.viewall}>View All</button>
    </div>
  );
}

export default TopArtist;
