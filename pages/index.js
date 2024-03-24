import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
  Loader,
  Second,
  Third,
  Fourth,
  Top,
  Latest,
  Amazing,
  Explore,
  Join,
} from "../components/componentsindex";
import { getTopCreators } from "../TopCreators/TopCreators";

//IMPORTING CONTRCT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConnected, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    // if (currentAccount) {
      fetchNFTs().then((items) => {
        if (items && items.length > 0) {
          setNfts(items.reverse());
        } else {
          console.log("No items fetched or items is not an array:", items);
          // Handle the case where no items are fetched or items is not an array
        }
    });
    // }
  }, []);

  //CREATOR LIST

  const creators = getTopCreators(nfts);
  // console.log(creators);

  return (
    <div className={Style.homePage}>
      <Second />
      <Third />
     < Fourth/>
  <Top/>
  <Category />
  <Slider />
  <Amazing/>
  <Title
        heading="Explore More"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}
      <BigNFTSilder />
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      {creators.length == 0 ? (
        <Loader />
      ) : (
        <FollowerTab TopCreator={creators} />
      )}
  <Join/>
      {/* <HeroSection /> */}
      {/* <Service /> */}
     

     
      {/* <Collection /> */}

{/* 
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      /> */}
      {/* <Category />
      <Subscribe />
      <Brand />
      <Video /> */}
    </div>
  );
};

export default Home;
