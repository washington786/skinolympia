import React from "react";
import MainWrapper from "../globals/MainWrapper";

const AboutPage = () => {
  let story =
    "Skin.Olympia Cosmetics was founded in 2021 in Gauteng, Johannesburg. We here at Skin.Olympia Cosmetics absolutely love handcrafted skincare products that make your spirit sing and skin glow. Skin.Olympia Cosmetics was founded with one goal in mind: providing high-quality organic skincare products at affordable prices. Our objective is to inspire people to wear their natural skin proudly. Through each handcrafted item, we hope to add sweetness to your skincare.";
  return (
    <MainWrapper>
      <div className="container py-4 align-self-center w-75">
        <h5 className="text-muted text-success fw-semibold text-center fs-4 text-capitalize">
          The Story of Skin.Olympia Cosmetics
        </h5>
        <p className="text-muted py-2 mb-3 text-success text-center d-block fs-6 display-1">
          Organic, Affordable, Relatable and Innovative cosmetic products.
        </p>

        <span className="text-muted fs-6 fw-lighter py-3 text-secondary text-center d-block ">
          {story}
        </span>
      </div>
    </MainWrapper>
  );
};

export default AboutPage;
