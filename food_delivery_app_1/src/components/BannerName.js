/* eslint-disable react/no-unescaped-entities */
import React from "react";

function BannerName({ link }) {
  return (
    <div className="bannerContent">
      <h3>Welocme to our food store.</h3>
      <p>
        The largest online food <span>store</span> in BANGLADESH.
      </p>
      <a href={link}>See more below</a>
    </div>
  );
}

export default BannerName;
