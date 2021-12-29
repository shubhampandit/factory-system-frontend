import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./FeaturedCard.css";

function FeaturedCard({ title, amount, rate }) {
  return (
    <div className="featuredItem">
      <span className="featuredTitle">{title}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{`$${amount}`}</span>
        <span className="featuredMoneyRate">
          {rate} <ArrowDownwardIcon className="featuredIcon negative" />
        </span>
      </div>
      <span className="featuredSub">Compared to last month.</span>
    </div>
  );
}

export default FeaturedCard;
