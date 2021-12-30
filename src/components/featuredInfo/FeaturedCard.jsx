import React, { useState, useEffect } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./FeaturedCard.css";
import AnalysisService from "../../service/AnalysisService";

const negativeStyle = <ArrowDownwardIcon className="featuredIcon negative" />;

const positiveStyle = <ArrowUpwardIcon className="featuredIcon" />;

const initialValue = {
  amount: 0,
  rate: 0.0,
};

function FeaturedCard({ title, link }) {
  const [analysisInfo, setAnalysisInfo] = useState(initialValue);
  useEffect(() => {
    AnalysisService.getAnalysis(link)
      .then((res) => {
        setAnalysisInfo({ amount: res.data.amount, rate: res.data.rate });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="featuredItem">
      <span className="featuredTitle">{title}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">
          {title === "Number of Orders"
            ? analysisInfo.amount
            : `Rs. ${analysisInfo.amount}`}
        </span>
        <span className="featuredMoneyRate">
          {analysisInfo.rate}{" "}
          {parseFloat(analysisInfo.rate) <= 0 ? negativeStyle : positiveStyle}
        </span>
      </div>
      <span className="featuredSub">Compared to last month.</span>
    </div>
  );
}

export default FeaturedCard;
