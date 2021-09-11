import React, { useEffect, useState } from "react";
import axios from "axios";

const EditService = (props) => {
  const [serviceTitle, setServiceTitle] = useState("");
const [serviceDescription, setServiceDescription] = useState("");
const [serviceCompany, setServiceCompany] = useState("");
const [serviceSalary, setServiceSalary] = useState("");

useEffect(() => {
  getService();
}, [])

const getService = async () => {
  try {
      let res = await axios.get(`/api/services/${props.match.params.id}`)
      setServiceTitle(res.data.title)
      setServiceDescription(res.data.description)
      setServiceCompany(res.data.company)
      setServiceSalary(res.data.salary)
      console.log(props.match.params.id)
  }catch (err) {

  }
};

const submitHandler = async (e) => {
  e.preventDefault();
  try {
    await axios.put(`/api/services/${props.match.params.id}`,
    {
    id: props.match.params.id, 
    title: serviceTitle,
    description: serviceDescription,
    company: serviceCompany,
    salary: serviceSalary 
    });

    props.history.push("/services");
  }catch (err) {
    console.log(err.response)
  }
};

  return(
    <div>
      <h1>
        EditService
      </h1>
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

        <button>Submit!</button>
      </form>



    </div>
  );
};

export default EditService;