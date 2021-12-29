import React from "react";
import "./OrderDetailsCard.css";

function OrderDetailsCard({ order }) {
  return (
    <div className="orderDetailsCard">
      <div className="orderDetailsCardTitle">Order Details</div>
      <div className="orderDetailsCardNameValueContainer">
        <div className="orderDetailsCardNameContainer">
          <div className="orderDetailsCardName">Order ID :</div>

          <div className="orderDetailsCardName">Contact Name :</div>
          <div className="orderDetailsCardName">Contact Number :</div>
          <div className="orderDetailsCardName">Assigned To :</div>
          <div className="orderDetailsCardName">Company Name :</div>
          <div className="orderDetailsCardName">Company Address :</div>
        </div>
        <div className="orderDetailsCardCalueContainer">
          <div className="orderDetailsCardValue">{order.orderId}</div>
          <div className="orderDetailsCardValue">{order.contactName}</div>
          <div className="orderDetailsCardValue">
            {order.contactNumber ? order.contactNumber : "000000000"}
          </div>
          <div className="orderDetailsCardValue">
            {order.assignedTo ? order.assignedTo : "Not Assigned"}
          </div>
          <div className="orderDetailsCardValue">{order.companyName}</div>
          <div className="orderDetailsCardValue">{order.companyAddress}</div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsCard;
