import axios from "axios";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const NewService = (props) => {
const [serviceTitle, setServiceTitle] = useState("");
const [serviceDescription, setServiceDescription] = useState("");
const [serviceCompany, setServiceCompany] = useState("");
const [serviceSalary, setServiceSalary] = useState("");

const submitHandler = async (e) => {
  e.preventDefault();
  try {
    await axios.post("/api/services/",
    {title: serviceTitle,
    description: serviceDescription,
    company: serviceCompany,
    salary: serviceSalary 
    });

    props.history.push("/services");
  }catch (err) {
    console.log(err.response)
  }
};

  return (
    <div>
      <h1>Add Service Requisition</h1>
      <form onSubmit={submitHandler}>
        <p>Title:</p>
        <input value={serviceTitle}
        onChange={(e) => setServiceTitle(e.target.value)}/>

        <p>Description:</p>
        <input value={serviceDescription}
        onChange={(e) => setServiceDescription(e.target.value)}/>

        <p>Company:</p>
        <input value={serviceCompany}
        onChange={(e) => setServiceCompany(e.target.value)}/>

        <p>Salary:</p>
        <input value={serviceSalary}
        onChange={(e) => setServiceSalary(e.target.value)}/>

        <br />

        <button style={{marginTop: "26px" }}>Submit!</button>

      </form>
    </div>
  );
};

export default NewService;