import React, { useState } from "react";
import styles from "./launchpad.module.css";
import { CiCalendar } from "react-icons/ci";
import { GiPlainCircle } from "react-icons/gi";

const Launchpad = () => {
  const [selectedFilter, setSelectedFilter] = useState("Upcoming and Live");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showMintButton, setShowMintButton] = useState(false);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleCardHover = (cardId, cardStatus) => {
    if (cardStatus === "Live") {
      setHoveredCard(cardId);
      setShowMintButton(true); // Show mint button when hovering over "Live" status
    } else {
      setHoveredCard(null);
      setShowMintButton(false); // Hide mint button when not hovering over "Live" status
    }
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
    setShowMintButton(false); // Hide mint button when leaving card
  };

  const collections = [
    {
      id: 1,
      image: "https://i.imgur.com/IoTr87Q.png",
      collectionName: "BitMON",
      category: "Lorem Ipsum is simply",
      prc: "10.42%",
      status: "Live",
      price: "0.01 SOL",
      items: "1.5K",
      minted: "94%"
    },
    {
      id: 2,
      image: "https://i.imgur.com/awvBYWO.png",
      collectionName: "Shadows",
      category: "Lorem Ipsum is simply",
      prc: "10.42%",
      status: "Live",
      price: "0.00 SOL",
      items: "666",
      minted: "94%"
    },
    {
      id: 3,
      image: "https://i.imgur.com/7O0p6Xu.png",
      collectionName: "Nexus Epoch",
      category: "Lorem Ipsum is simply",
      prc: "10.42%",
      status: "Live",
      price: "0.022 SOL",
      items: "95",
      minted: "28%"
    },
    {
      id: 4,
      image: "https://i.imgur.com/cKFsPmn.png",
      collectionName: "Flipper",
      category: "Lorem Ipsum is simply",
      prc: "10.42%",
      status: "Upcoming",
      price: "TBA",
      items: "999",
      minted: "0%"
    },
    {
      id: 5,
      image: "https://i.imgur.com/IgmuxoG.png",
      collectionName: "The Cat Who Stole the Sun",
      category: "Lorem Ipsum is simply",
      prc: "10.42%",
      status: "Upcoming",
      price: "0.99 SOL",
      items: "10K",
      minted: "0%"
    },
    {
      id: 6,
      image: "https://i.imgur.com/vx79wy6.png",
      collectionName: "Collector Crypto",
      category: "Lorem Ipsum is simply",
      prc: "10.42%",
      status: "End",
      price: "0.32 SOL",
      items: "15K",
      minted: "50%"
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.popularCollection}>
        <div className={styles.leftSide}>
        <div className={styles.filterOptions}>
          <p
            className={selectedFilter === "Upcoming and Live" ? styles.active : ""}
            onClick={() => handleFilterClick("Upcoming and Live")}
          >
            Live & Upcoming
          </p>
          <p
            className={selectedFilter === "Past" ? styles.active : ""}
            onClick={() => handleFilterClick("Past")}
          >
            Past
          </p>
        </div>
          {/* <h3>TRENDING</h3> */}
        </div>
     

        {/* <div className={styles.seeAllButton}>
          <button className={styles.button}>See All</button>
        </div> */}
      </div>
      <div className={styles.collectionsContainer}>
        {(selectedFilter === "Upcoming and Live" || selectedFilter === "Past") && (
          <div className={styles.cardsSection}>
            {collections
              .filter(
                (collection) =>
                  selectedFilter === "Upcoming and Live"
                    ? collection.status === "Upcoming" || collection.status === "Live"
                    : collection.status === "End"
              )
              .map((card) => (
                <div
                  key={card.id}
                  className={styles.card}
                  onMouseEnter={() => handleCardHover(card.id, card.status)}
                  onMouseLeave={handleCardLeave}
                >
                  {/* <GiPlainCircle className={styles.blackCircle} /> */}
                  <img src={card.image} alt={`Card ${card.id}`} />
                  <div className={styles.cardText}>
                    <p className={styles.collectionName}>{card.collectionName}</p>
                    <div className={styles.carddet}>
                      <div className={styles.pricegroup}>
                        <div className={styles.price}>
                          <div className={styles.pricetag}>PRICE</div>
                          <div className={styles.priceshwo}>{card.price}</div>
                        </div>
                      </div>
                      <div className={styles.pricegroup}>
                        <div className={styles.itmtag}>ITEMS</div>
                        <div className={styles.itmshow}>{card.items}</div>
                      </div>
                      <div className={styles.pricegroup}>
                        <div className={styles.minttag}>MINTED</div>
                        <div className={styles.mintshow}>{card.minted}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardLive}>
                    {/* <div>&nbsp;</div> */}
                    <div className={styles.live}>
                      {hoveredCard === card.id ? (
                        showMintButton && <div className={styles.mintButton}>Mint</div>
                      ) : (
                        <>
                          <GiPlainCircle className={styles.Icon} />
                          {selectedFilter === "Past" ? "End" : card.status}
                        </>
                      )}
                    </div>
                    {/* <div className={styles["calendar-icon"]}>
                      <CiCalendar />
                    </div> */}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Launchpad;
