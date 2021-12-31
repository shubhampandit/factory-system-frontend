import React from "react";
import "./WidgetSm.css";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <div className="widgetSmTitle">Most Sold Products</div>
      <div className="widgetSmItemWrapper">
        <div className="widgetSmItem">
          <div className="rankWrapper">
            <div className="itemTitle">Rank</div>
            <div className="itemName">#1</div>
          </div>
          <div className="productWrapper">
            <div className="itemTitle">Product</div>
            <div className="itemName">Test Product 1</div>
          </div>
          <div className="quantityWrapper">
            <div className="itemTitle">Quantity</div>
            <div className="itemName">3 MT</div>
          </div>
        </div>
        <div className="widgetSmItem">
          <div className="rankWrapper">
            <div className="itemTitle">Rank</div>
            <div className="itemName">#2</div>
          </div>
          <div className="productWrapper">
            <div className="itemTitle">Product</div>
            <div className="itemName">Test Product 1</div>
          </div>
          <div className="quantityWrapper">
            <div className="itemTitle">Quantity</div>
            <div className="itemName">3 MT</div>
          </div>
        </div>
        <div className="widgetSmItem">
          <div className="rankWrapper">
            <div className="itemTitle">Rank</div>
            <div className="itemName">#3</div>
          </div>
          <div className="productWrapper">
            <div className="itemTitle">Product</div>
            <div className="itemName">Test Product 1</div>
          </div>
          <div className="quantityWrapper">
            <div className="itemTitle">Quantity</div>
            <div className="itemName">3 MT</div>
          </div>
        </div>
        <div className="widgetSmItem">
          <div className="rankWrapper">
            <div className="itemTitle">Rank</div>
            <div className="itemName">#4</div>
          </div>
          <div className="productWrapper">
            <div className="itemTitle">Product</div>
            <div className="itemName">Test Product 1</div>
          </div>
          <div className="quantityWrapper">
            <div className="itemTitle">Quantity</div>
            <div className="itemName">3 MT</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetSm;
