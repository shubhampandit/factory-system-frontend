import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import CompanyMasterService from "../../service/CompanyMasterService";
import "./CreateCompanyPage.css";

const initialAddressValues = {
  address: "",
  city: "",
  state: "",
  country: "India",
  pinCode: "",
};

const initialContactDetails = {
  contactPerson: "",
  phoneNumber: "",
  mobileNumber: "",
  faxNumber: "",
  email: "",
  cc: "",
  website: "",
};

const initialBankDetails = {
  bankName: "",
  accountNumber: "",
  ifscCode: "",
  branch: "",
};

const initialDestination = {
  address: "",
  city: "",
  state: "",
  country: "India",
  pinCode: "",
};

const initialTaxDetails = {
  panNumber: "",
  registrationType: "",
  gstin: "",
};

function CreateCompanyPage(props) {
  const [name, setName] = useState("");
  const [addressDetails, setAddressDetails] = useState(initialAddressValues);
  const [contactDetails, setContactDetails] = useState(initialContactDetails);
  const [bankDetails, setBankDetails] = useState(initialBankDetails);
  const [destination, setDestination] = useState(initialDestination);
  const [taxDetails, setTaxDetails] = useState(initialTaxDetails);
  const [additionalInformation, setAdditionalInformation] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddressDetails({ ...addressDetails, [name]: value });
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleBankChange = (event) => {
    const { name, value } = event.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const handleDestination = (event) => {
    const { name, value } = event.target;
    setDestination({ ...destination, [name]: value });
  };

  const handleTaxDetails = (event) => {
    const { name, value } = event.target;
    setTaxDetails({ ...taxDetails, [name]: value });
  };

  const handleAdditional = (event) => {
    setAddressDetails(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const company = {
      name,
      addressDetails,
      contactDetails,
      bankDetails,
      destination,
      taxDetails,
      additionalInformation,
    };
    CompanyMasterService.postCompanyDetails(company)
      .then((res) => {
        console.log("COMPANY CREATED!!!");
        const { history } = props;
        history.push(`/companyDetails/${res.data.companyId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="createCompanyPage">
      <Container fluid className="p-3">
        <Row className="mt-2 mb-3">
          <h1 className="createCompanyTitle">Create Company Details</h1>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Row className="p-3 mb-4">
            <Col className="px-4">
              <h2 className="mb-3 createCompanyTitle">Firm Details</h2>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Enter Company Name here."
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  name="address"
                  value={addressDetails.address}
                  onChange={handleAddressChange}
                  placeholder="Enter Company Address here."
                  style={{ height: "100px" }}
                />
              </Form.Group>
              <Row className="mb-5">
                <Col xs={4}>
                  <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={addressDetails.city}
                      onChange={handleAddressChange}
                      placeholder="eg :- Raipur"
                    />
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <Form.Group controlId="formState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      value={addressDetails.state}
                      onChange={handleAddressChange}
                      placeholder="eg :- Chhattisgarh"
                    />
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <Form.Group controlId="formPincode">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                      type="text"
                      name="pinCode"
                      value={addressDetails.pinCode}
                      onChange={handleAddressChange}
                      placeholder="eg :- 492001"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <h2 className="mb-3 createCompanyTitle">Destination</h2>
              <Form.Group as={Row} className="mb-3" controlId="formDestRadio">
                <Form.Label column sm="8">
                  Does this company got different destination?
                </Form.Label>
                <Col>
                  <Form.Check inline label="Yes" name="dest" type="radio" />
                  <Form.Check
                    inline
                    defaultChecked
                    label="No"
                    name="dest"
                    type="radio"
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col className="px-4">
              <h2 className="mb-3 createCompanyTitle">Contact</h2>
              <Form.Group className="mb-3" controlId="formContactName">
                <Form.Label>Contact Person</Form.Label>
                <Form.Control
                  type="text"
                  name="contactPerson"
                  value={contactDetails.contactPerson}
                  onChange={handleContactChange}
                  placeholder="Enter Contact Person here."
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formContactName">
                    <Form.Label>Telephone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phoneNumber"
                      value={contactDetails.phoneNumber}
                      onChange={handleContactChange}
                      placeholder="Enter Telephone Number here."
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formContactName">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobileNumber"
                      value={contactDetails.mobileNumber}
                      onChange={handleContactChange}
                      placeholder="Enter Mobile Number here."
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formContactName">
                    <Form.Label>Fax Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="faxNumber"
                      value={contactDetails.faxNumber}
                      onChange={handleContactChange}
                      placeholder="Enter Fax Number here."
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formContactName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={contactDetails.email}
                      onChange={handleContactChange}
                      placeholder="Enter Fax Number here."
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formContactName">
                    <Form.Label>CC</Form.Label>
                    <Form.Control
                      type="text"
                      name="cc"
                      value={contactDetails.cc}
                      onChange={handleContactChange}
                      placeholder="Enter Fax Number here."
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-5" controlId="formContactName">
                <Form.Label>Website</Form.Label>
                <Form.Control
                  type="text"
                  name="website"
                  value={contactDetails.website}
                  onChange={handleContactChange}
                  placeholder="Enter Fax Number here."
                />
              </Form.Group>
              <h2 className="mb-3 createCompanyTitle">Bank</h2>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formContactName">
                    <Form.Label>Bank Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="bankName"
                      value={bankDetails.bankName}
                      onChange={handleBankChange}
                      placeholder="Enter Fax Number here."
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formContactName">
                    <Form.Label>Account No.</Form.Label>
                    <Form.Control
                      type="text"
                      name="accountNumber"
                      value={bankDetails.accountNumber}
                      onChange={handleBankChange}
                      placeholder="Enter Fax Number here."
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formContactName">
                    <Form.Label>IFSC Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="ifscCode"
                      value={bankDetails.ifscCode}
                      onChange={handleBankChange}
                      placeholder="Enter Fax Number here."
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-5" controlId="formContactName">
                <Form.Label>Branch</Form.Label>
                <Form.Control
                  type="text"
                  name="branch"
                  value={bankDetails.branch}
                  onChange={handleBankChange}
                  placeholder="Enter Fax Number here."
                />
              </Form.Group>
              <h2 className="mb-3 createCompanyTitle">Tax</h2>
              <Form.Group className="mb-3" controlId="formContactName">
                <Form.Label>PAN No.</Form.Label>
                <Form.Control
                  type="text"
                  name="panNumber"
                  value={taxDetails.panNumber}
                  onChange={handleTaxDetails}
                  placeholder="Enter PAN Number here."
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group controlId="formContactName">
                    <Form.Label>Registration Type</Form.Label>
                    <Form.Select
                      name="registrationType"
                      value={taxDetails.registrationType}
                      onChange={handleTaxDetails}
                    >
                      <option>Please Select</option>
                      <option value="Regular">Regular</option>
                      <option value="UnRegistered">UnRegistered</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formContactName">
                    <Form.Label>GSTIN</Form.Label>
                    <Form.Control
                      type="text"
                      name="gstin"
                      value={taxDetails.gstin}
                      onChange={handleTaxDetails}
                      placeholder="Enter PAN Number here."
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="createCompanyBottomContainer">
            <Button
              className="createCompanyButton"
              type="submit"
              variant="primary"
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

export default CreateCompanyPage;
