import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
      </Link>
    </div>
  );
};

export default InfoBox;
