import React from "react";
import "./FeaturedInfo.css";
import FeaturedCard from "./FeaturedCard";

function FeaturedInfo() {
  return (
    <div className="featured">
      <FeaturedCard title="Number of Orders" link="/numberOfOrders" />
      <FeaturedCard title="Revenue" link="/revenue" />
      <FeaturedCard title="Profit" link="/profit" />
    </div>
  );
}

export default FeaturedInfo;
