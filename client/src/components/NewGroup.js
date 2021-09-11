import React, { useState } from "react";
import axios from "axios";

const NewGroup = (props) => {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
   
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post( "/api/groups/",
      {name: groupName,
      description: groupDescription});
      props.history.push("/groups");

      } catch (error) {
    console.log(error.response)
    alert("What do you think you're doing!?")
  }
};
  
  
  return (
    <div style={{margin: "20px"}}>
      <h1>
        Add New Shop
      </h1>

      <form onSubmit={submitHandler} >
        <p>Shop Name:</p>
        <input value={groupName}
        onChange={(e) => {setGroupName(e.target.value)}}/>

        <p>Shop Description:</p>
        <input value={groupDescription}
        onChange={(e) => {setGroupDescription(e.target.value)}}/>

        <br />

        <button style={{margin: "20px"}}> Add Shop </button>
      </form>
    </div>
  );
};

export default NewGroup;