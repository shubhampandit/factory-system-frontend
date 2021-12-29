import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import ProductService from "../../service/ProductService";
import "./CreateProductPage.css";

const initialValues = {
  name: "",
  hsnsac: "",
  type: "",
  unit: "",
  isNonGSTGood: false,
  taxability: "",
  basicRate: 0.0,
  guessingDiff: 0.0,
  productVariant: [],
};

function CreateProductPage(props) {
  const [product, setProduct] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ProductService.postProduct(product)
      .then((res) => {
        const { history } = props;
        history.push(`/productDetails/${res.data.productId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="createProduct">
      <Container fluid className="p-3">
        <Row className="mt-2 mb-3">
          <h1 className="createProductTitle">Create Product Details</h1>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Row className="p-3 mb-4">
            <Col className="px-4">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  placeholder="Enter Product Name here."
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>HSN/SAC</Form.Label>
                <Form.Control
                  type="text"
                  name="hsnsac"
                  value={product.hsnsac}
                  onChange={handleChange}
                  placeholder="Enter HSN/SAC here."
                />
              </Form.Group>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formType">
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      type="text"
                      name="type"
                      value={product.type}
                      onChange={handleChange}
                      placeholder="Enter Product Type here."
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formType">
                    <Form.Label>Unit</Form.Label>
                    <Form.Control
                      type="text"
                      name="unit"
                      value={product.unit}
                      onChange={handleChange}
                      placeholder="Enter Product Unit here."
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group as={Row} className="mb-3" controlId="formDestRadio">
                <Form.Label column sm="8">
                  Is non GST good?
                </Form.Label>
                <Col>
                  <Form.Check
                    inline
                    label="Yes"
                    name="isNonGSTGood"
                    onChange={(e) => {
                      e.target.checked &&
                        setProduct({ ...product, isNonGSTGood: true });
                    }}
                    type="radio"
                  />
                  <Form.Check
                    inline
                    defaultChecked
                    label="No"
                    name="isNonGSTGood"
                    onChange={(e) => {
                      e.target.checked &&
                        setProduct({ ...product, isNonGSTGood: false });
                    }}
                    type="radio"
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col className="px-4">
              <Form.Group className="mb-3" controlId="formContactName">
                <Form.Label>Taxability</Form.Label>
                <Form.Select
                  name="taxability"
                  value={product.taxability}
                  onChange={handleChange}
                >
                  <option>Please Select</option>
                  <option value="Taxable">Taxable</option>
                  <option value="Exempt">Exempt</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Basic Rate</Form.Label>
                    <Form.Control
                      type="number"
                      name="basicRate"
                      value={product.basicRate}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Guessing Difference</Form.Label>
                    <Form.Control
                      type="number"
                      name="guessingDiff"
                      value={product.guessingDiff}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="createProductBottomContainer">
            <Button
              className="createProductButton"
              variant="primary"
              type="submit"
            >
              Create
            </Button>
            <Button variant="danger">Cancel</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default CreateProductPage;
