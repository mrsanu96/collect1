import React, { useState } from "react";
import styles from "./explore.module.css";
function Explore() {
  const [selectedFilter, setSelectedFilter] = useState("TODAY");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const collections = [
    {
      id: 1,
      image: "https://i.imgur.com/awvBYWO.png",
      collectionName: "Alien Cat",
      category: "GAME",
      itm: "1",
    },
    {
      id: 2,
      image: "https://i.imgur.com/cKFsPmn.png",
      collectionName: "Project Example 0002",
      category: "TODAY",
      itm: "2",
    },
    {
      id: 3,
      image: "https://i.imgur.com/vx79wy6.png",
      collectionName: "Project Example 0003",
      category: "SPORTS",
      itm: "1",
    },
    {
      id: 4,
      image: "https://i.imgur.com/vx79wy6.png",
      collectionName: "Project Example 0003",
      category: "TODAY",
      itm: "1",
    },
    {
      id: 5,
      image: "https://i.imgur.com/vx79wy6.png",
      collectionName: "Project Example 0003",
      category: "GAME",
      itm: "1",
    },
    {
      id: 6,
      image: "https://i.imgur.com/Onc76wi.png",
      collectionName: "Project Example Six",
      category: "GAME",
      prc: "10.42%",
    },
    {
      id: 7,
      image: "https://i.imgur.com/4vjymDQ.png",
      collectionName: "Project Example Seven",
      category: "GAME",
      prc: "10.42%",
    },
    {
      id: 8,
      image: "https://i.imgur.com/ahIPB6T.png",
      collectionName: "Project Example Eight",
      category: "TODAY",
      prc: "10.42%",
    },
    {
      id: 9,
      image: "https://i.imgur.com/xNaUfwZ.png",
      collectionName: "Project Example Nine",
      category: "TODAY",
      prc: "10.42%",
    },
    {
      id: 10,
      image: "https://i.imgur.com/QIjYQAV.png",
      collectionName: "Project Example Ten",
      category: "SPORT",
      prc: "10.42%",
    },
    {
      id: 11,
      image: "https://i.imgur.com/xNaUfwZ.png",
      collectionName: "Project Example Eleven",
      category: "SPORTS",
      prc: "10.42%",
    },
    {
      id: 12,
      image: "https://i.imgur.com/QIjYQAV.png",
      collectionName: "Project Example Twelve",
      category: "SPORTS",
      prc: "10.42%",
    },

  ];

  return (
    <div className={styles.elatestcontainer}>
      <div className={styles.etextarea}>
        {" "}
        <h3>Explore More</h3> <br></br>
        <p>
          {" "}
          Buy, Sell, Bid and discover exclusive digital items. Choose your topic and start your collection. On the people's website.
        </p>
      </div>
      <div className={styles.efilterOptions}>
        <p
          className={styles.selectedFilter === "TODAY" ? {active} : {}}
          onClick={() => handleFilterClick("TODAY")}
        >
          TODAY
        </p>
        <p
          className={styles.selectedFilter === "GAME" ? "active" : ""}
          onClick={() => handleFilterClick("GAME")}
        >
          GAME
        </p>
        <p
          className={styles.selectedFilter === "PHOTOGRAPH" ? "active" : ""}
          onClick={() => handleFilterClick("PHOTOGRAPH")}
        >
          PHOTOGRAPH
        </p>
        <p
          className={styles.selectedFilter === "MUSIC" ? "active" : ""}
          onClick={() => handleFilterClick("MUSIC")}
        >
          MUSIC
        </p>
        <p
          className={styles.selectedFilter === "COMICS" ? "active" : ""}
          onClick={() => handleFilterClick("COMICS")}
        >
          COMICS
        </p>
        <p
          className={styles.selectedFilter === "SPORTS" ? "active" : ""}
          onClick={() => handleFilterClick("SPORTS")}
        >
          SPORTS
        </p>
        <p
          className={styles.selectedFilter === "TRADING CARDS" ? "active" : ""}
          onClick={() => handleFilterClick("TRADING CARDS")}
        >
          TRADING CARDS
        </p>
        <p
          className={styles.selectedFilter === "VIRTUAL WORLD" ? "active" : ""}
          onClick={() => handleFilterClick("VIRTUAL WORLD")}
        >
          VIRTUAL WORLD
        </p>
        <p
          className={styles.selectedFilter === "UTILITY" ? "active" : ""}
          onClick={() => handleFilterClick("UTILITY")}
        >
          UTILITY
        </p>
      </div>
      <div className={styles.ecollectionsContainer}>
        {/* Conditional rendering based on the selected filter */}
        {collections
          .filter((card) => card.category === selectedFilter)
          .map((filteredCard) => (
            <div key={filteredCard.id} className={styles.ecardsSection}>
              <div className={styles.ecard}>
                {/* ... (existing code for rendering a card) */}
                <img src={filteredCard.image} alt={`Card ${filteredCard.id}`} />
                <div className={styles.ecollectionName}>
                  {filteredCard.collectionName}
                </div>
                <div className={styles.ecardText}>
                  <div className={styles.ecategory}>{filteredCard.category}</div>
                  <div className={styles.eitem}>{filteredCard.itm} Items</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Explore;
