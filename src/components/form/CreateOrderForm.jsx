import React, { useState } from "react";
import { Form } from "react-bootstrap";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import CompanyMasterService from "../../service/CompanyMasterService";
import "./CreateOrderForm.css";

function CreateOrderForm(props) {
  const { order, setOrder } = props;

  const animatedComponents = makeAnimated();

  const handleCompanyNameChange = ({ value }) => {
    setOrder({
      ...order,
      companyId: value,
    });
  };

  const handleBrokerChange = ({ value }) => {
    setOrder({
      ...order,
      brokerId: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setOrder({
      ...order,
      [name]: value,
    });
  };

  const loadCompanyOptions = (inputText, callback) => {
    CompanyMasterService.searchCompany(inputText).then((res) => {
      callback(res.data);
    });
  };

  const loadBrokerOptions = () => {};

  return (
    <Form>
      <Form.Group className="mb-2" controlId="formBasicCompanyName">
        <Form.Label className="createOrderLabel">Company Name</Form.Label>
        <AsyncSelect
          autoFocus
          cacheOptions
          components={animatedComponents}
          loadOptions={loadCompanyOptions}
          onChange={handleCompanyNameChange}
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicCompanyAddress">
        <Form.Label className="createOrderLabel">Broker (If Any)</Form.Label>
        <AsyncSelect
          name="companyName"
          cacheOptions
          components={animatedComponents}
          loadOptions={loadBrokerOptions}
          onChange={handleBrokerChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicAssignedTo">
        <Form.Label className="createOrderLabel">Assigned To</Form.Label>
        <Form.Control
          type="text"
          name="assignedTo"
          value={order.assignedTo}
          onChange={handleInputChange}
          placeholder="Enter Assigned To here."
        />
      </Form.Group>
    </Form>
  );
}

export default CreateOrderForm;
