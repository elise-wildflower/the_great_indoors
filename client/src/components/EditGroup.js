import React, { useState, useEffect } from "react";
import axios from "axios";

const EditGroup = (props) => {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");

  useEffect(() => {
    getGroup();
  }, []);

  const getGroup = async () => {
    try {
      let res = await axios.get(`/api/groups/${props.match.params.id}`)
      setGroupName(res.data.name)
      setGroupDescription(res.data.description)
    } catch (error){
      console.log(error)
      alert("You've ruined it!")
    }
  };
   
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/groups/${props.match.params.id}`,
      {
      id: props.match.params.id,
      name: groupName,
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
        Edit Shop
      </h1>

      <form onSubmit={submitHandler} >
        <p>Shop Name:</p>
        <input value={groupName}
        onChange={(e) => {setGroupName(e.target.value)}}/>

        <p>Shop Description:</p>
        <input value={groupDescription}
        onChange={(e) => {setGroupDescription(e.target.value)}}/>

        <br />

        <button style={{margin: "20px"}}> Update Shop </button>
      </form>
    </div>
  );
};

export default EditGroup;