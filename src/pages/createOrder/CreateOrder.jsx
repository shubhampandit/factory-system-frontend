import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./CreateOrder.css";
import CreateOrderForm from "../../components/form/CreateOrderForm";
import ProductModal from "../../components/productModal/ProductModal";
import AddProductForm from "../../components/form/AddProductForm";
import ProductCard from "../../components/card/productCard/ProductCard";
import OrderService from "../../service/OrderService";
import ExtraCostService from "../../service/ExtraCostService";

const initialValues = {
  companyId: "",
  brokerId: "",
  assignedTo: "",
  products: [],
};

function CreateOrder(props) {
  const [openModal, setOpenModal] = useState(false);
  const [order, setOrder] = useState(initialValues);
  const [extraCost, setExtraCost] = useState({});

  const history = useHistory();

  const handleAddProduct = (product) => {
    const newList = order.products.concat(product);
    setOrder({ ...order, products: newList });
  };

  const handleCreateOrder = () => {
    OrderService.postOrder(order)
      .then((res) => {
        console.log("Order Placed Successfully!");
        let orderId = res.data.orderId;
        history.push(`/order/${orderId}`);
      })
      .catch((error) => {
        console.log(`Error while placing the order : ${error}`);
      });
  };

  const handleOrderCancel = () => {
    history.push("/orders");
  };

  const calculateTotalProductPrice = (products) => {
    let price = 0;
    products.map((product) => (price += parseInt(product.price)));
    return price;
  };

  useEffect(() => {
    ExtraCostService.getExtraCost().then((res) => {
      setExtraCost(res.data);
    });
  }, []);

  return (
    <div className="createOrder">
      <div className="createOrderContainer">
        <div className="createOrderTitle">Create Order</div>
        <div className="createOrderTopContainer">
          <div className="createOrderPaper">
            <CreateOrderForm order={order} setOrder={setOrder} />
          </div>
          <div className="createOrderAddProductContainer">
            <div className="addProductTopContainer">
              <div className="addProductTitle">Products</div>
              <Button onClick={() => setOpenModal(true)} variant="success">
                Add Product
              </Button>
            </div>
            <div className="addProductBottomContainer">
              {order.products.length > 0 ? (
                order.products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))
              ) : (
                <div className="addProductBanner">
                  There is no product added.
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="createOrderBottomContainer">
          <div className="createOrderTotal">
            <div className="createOrderTotalTitle">Total :</div>
            <div className="createOrderTotalNumber">
              ${calculateTotalProductPrice(order.products)}
            </div>
          </div>
          <div className="createOrderButtonGroup">
            <Button
              onClick={handleCreateOrder}
              variant="primary"
              className="createOrderButton"
            >
              Create
            </Button>
            <Button
              onClick={handleOrderCancel}
              variant="outline-danger"
              className="createOrderCancel"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <ProductModal openModal={openModal} setOpenModal={setOpenModal}>
        <AddProductForm
          onAddProduct={handleAddProduct}
          setOpenModal={setOpenModal}
          extraCost={extraCost}
        />
      </ProductModal>
    </div>
  );
}

export default CreateOrder;
