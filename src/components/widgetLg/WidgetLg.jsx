import React, { Component } from "react";
import "./WidgetLg.css";
import OrderService from "../../service/OrderService";
import { Link } from "react-router-dom";

const StatusButton = ({ type }) => {
  return <button className={"widgetLgButton " + type}>{type}</button>;
};

class WidgetLg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    OrderService.getLatestOrders().then((res) => {
      this.setState({ orders: res.data });
    });
  }

  render() {
    return (
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Orders</h3>
        <table className="widgetLgTable">
          <thead>
            <tr className="widgetLgTr">
              <th className="wigdetLgTh">Order ID</th>
              <th className="wigdetLgTh">Company Name</th>
              <th className="wigdetLgTh">Assigned To</th>
              <th className="wigdetLgTh">Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((order) => (
              <tr key={order.orderId} className="widgetLgTr">
                <td className="widgetLgOrderId">
                  <Link to={`/order/${order.orderId}`}>{order.orderId}</Link>
                </td>
                <td className="widgetLgCompanyName">{order.companyName}</td>
                <td className="widgetLgAssignedTo">{order.assignedTo}</td>
                <td className="widgetLgStatus">
                  <StatusButton type={order.orderStatus} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default WidgetLg;
