import React from "react";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../img";

import { Slider, Brand, Launchpad } from "../components/componentsindex";
import Filter from "../components/Filter/Filter";

const launchpad = () => {
  const collectionArray = [
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
  ];
  return (
    <div>
      <Launchpad />
    </div>
  );
};

export default launchpad;