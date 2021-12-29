import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import "./OrderDetails.css";
import OrderService from "../../service/OrderService";
import OrderDetailsCard from "../../components/card/orderDetailsCard/OrderDetailsCard";
import ProductCard from "../../components/card/productCard/ProductCard";
import { Container } from "react-bootstrap";

const initialValues = {
  companyName: "",
  companyAddress: "",
  contactName: "",
  contactNumber: "",
  orderId: "",
  orderStatus: "",
  assignedTo: "",
  products: [],
};

const data02 = [
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function OrderDetails(props) {
  const { match } = props;
  const [order, setOrder] = useState(initialValues);

  const fetchOrder = () => {
    OrderService.getOrder(match.params.orderId)
      .then((res) => {
        setOrder(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="orderDetails">
      <div className="orderDetailsContainer">
        <div className="orderDetailsTopContainer">
          <OrderDetailsCard order={order} />
          <div className="productDetailsCard">
            <div className="productDetailTitle">Products</div>
            <div className="productDetailBottomContainer">
              {order.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="orderDetailsBottomContainer">
          <div className="orderStatusCard">
            Order Status : {order.orderStatus}
          </div>
          <div className="orderProductCard">
            <div className="productChartTitle">Product Chart</div>
            <ResponsiveContainer width="100%" height="100%" aspect={1 / 1}>
              <PieChart>
                <Pie
                  data={data02}
                  dataKey="value"
                  innerRadius={90}
                  outerRadius={120}
                  fill="#82ca9d"
                >
                  {data02.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
