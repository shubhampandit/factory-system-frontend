import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "react-bootstrap";
import OrderService from "../../service/OrderService";
import "./OrderList.css";
import { Grid } from "@material-ui/core";

function OrderList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    OrderService.getLatestOrders().then((res) => {
      const rows = res.data.map((data) => {
        const { orderId, ...rest } = data;
        return { id: orderId, orderId: orderId, ...rest };
      });
      setData(rows);
    });
  }, []);

  const columns = [
    { field: "orderId", headerName: "Order ID", width: 300 },
    { field: "companyName", headerName: "Company Name", width: 300 },
    { field: "assignedTo", headerName: "Assigned To", width: 300 },
    { field: "orderStatus", headerName: "Order Status", width: 260 },
  ];

  return (
    <div className="orderList">
      <div className="orderListTopContainer">
        <div className="orderListTitle">Orders</div>
        <Link to="/createOrder">
          <Button className="orderListButton" variant="success">
            Create
          </Button>
        </Link>
      </div>
      <Grid container>
        <Grid item xs={12} style={{ height: 608 }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderList;
