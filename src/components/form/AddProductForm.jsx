import React, { useState } from "react";
import {
  FormControl,
  Form,
  Button,
  InputGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import "./AddProductForm.css";
import ProductService from "../../service/ProductService";

const initialFetchedValues = {
  productId: "",
  productName: "",
  price: 0,
  guessingDiff: "0",
};

const initialPostedProduct = {
  productId: "",
  productName: "",
  quantity: 0,
  price: "",
};

function AddProductForm(props) {
  const { onAddProduct, setOpenModal, extraCost } = props;

  const [isBasic, setIsBasic] = useState(true);
  const [fetchedProduct, setFetchedProduct] = useState(initialFetchedValues);
  const [quantity, setQuantity] = useState(0);

  const animatedComponents = makeAnimated();

  const loadOptions = (inputText, callback) => {
    ProductService.searchProduct(inputText)
      .then((res) => {
        callback(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleProductNameChange = (e) => {
    setFetchedProduct(e);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // setData({ ...data, [name]: value });
    setFetchedProduct({ ...fetchedProduct, [name]: value });
    console.log(event);
  };

  const handleAddProduct = () => {
    const productData = {
      productId: fetchedProduct.productId,
      productName: fetchedProduct.productName,
      quantity: quantity,
      price: handleTotalCost(),
    };
    onAddProduct(productData);
    setOpenModal(false);
  };

  const handleProductPrice = () => {
    return parseFloat(fetchedProduct.price) > 0
      ? `${parseFloat(fetchedProduct.price)} x ${quantity}`
      : 0;
  };

  const handleProductGuessDiff = () => {
    return parseFloat(fetchedProduct.guessingDiff) > 0
      ? `${parseFloat(fetchedProduct.guessingDiff)} x ${quantity}`
      : 0;
  };

  const handleCuttingCost = () => {
    return quantity > 0 ? `${extraCost.cuttingRate} x ${quantity}` : 0;
  };

  const handleLoadingCost = () => {
    return extraCost.unCommissionedLoadingRate;
  };

  const handleTotalCost = () => {
    let totalAmount = 0.0;
    if (isBasic) {
      totalAmount +=
        parseFloat(fetchedProduct.guessingDiff) * parseFloat(quantity);
    }
    totalAmount += parseFloat(fetchedProduct.price) * parseFloat(quantity);
    totalAmount += parseFloat(extraCost.cuttingRate) * parseFloat(quantity);
    totalAmount += parseFloat(extraCost.unCommissionedLoadingRate);
    return parseFloat(quantity) > 0 ? totalAmount : 0;
  };

  return (
    <div className="addProductFormContainer">
      <Container className="mb-2">
        <Form>
          <Row className="mb-2">
            <Col>
              <Form.Group controlId="formBasicCompanyName">
                <Form.Label className="createProductLabel">
                  Product Name
                </Form.Label>
                <AsyncSelect
                  autoFocus
                  cacheOptions
                  components={animatedComponents}
                  loadOptions={loadOptions}
                  getOptionLabel={(e) => {
                    return e.productName;
                  }}
                  getOptionValue={(e) => {
                    return e.productId;
                  }}
                  onChange={handleProductNameChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicAssignedTo">
                <Form.Label className="createProductLabel">Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={parseFloat(fetchedProduct.price)}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicAssignedTo">
                <Form.Label className="createProductLabel">Quantity</Form.Label>
                <InputGroup>
                  <FormControl
                    type="number"
                    aria-describedby="basic-addon1"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <InputGroup.Text id="basic-addon1">MT</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col></Col>
            <Col>
              <Form.Group controlId="formDestRadio">
                <Form.Check
                  inline
                  defaultChecked
                  label="Basic"
                  name="isBasic"
                  onChange={(e) => {
                    e.target.checked && setIsBasic(true);
                  }}
                  type="radio"
                />
                <Form.Check
                  inline
                  label="Only"
                  name="isBasic"
                  onChange={(e) => {
                    e.target.checked && setIsBasic(false);
                  }}
                  type="radio"
                />
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <div className="createProductMiddleContainer">
            <div className="billSpacing">
              <Button
                size="lg"
                onClick={handleAddProduct}
                variant="primary"
                className="addProductAddButton"
              >
                Add
              </Button>
              <Button
                size="lg"
                variant="outline-danger"
                className="cancelProductButton"
              >
                Cancel
              </Button>
            </div>
            <div className="billWrapper">
              <div className="productBillItem">
                <h5 className="billTitle">Price</h5>
                {isBasic && <h5 className="billTitle">Guess Difference</h5>}

                <h5 className="billTitle">Cutting Cost</h5>
                <h5 className="billTitle">Loading Cost</h5>
                <h5 className="billTitle">Total Cost</h5>
              </div>
              <div className="productBillValue">
                <h5>{`Rs. ${handleProductPrice()}`}</h5>
                {isBasic && <h5>{`Rs. ${handleProductGuessDiff()}`}</h5>}

                <h5>{`Rs. ${handleCuttingCost()}`}</h5>
                <h5>{`Rs. ${handleLoadingCost()}`}</h5>
                <h5>{`Rs. ${handleTotalCost()}`}</h5>
              </div>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default AddProductForm;
