import React, { useState, useEffect } from "react";
import axios from "axios";

const EditItem = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(false);


  useEffect(()=> {
    getItem()
  }, []);


  const getItem = async () => {
    try {
      let res = await axios.get(`/api/groups/${props.match.params.group_id}/items/${props.match.params.id}`);
      setName(res.data.name);
      setDescription(res.data.description);
      setPrice(res.data.price);
  } catch (err) {
      console.log(err);
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      await axios.put(`/api/groups/${props.match.params.group_id}/items/${props.match.params.id}`,{
        name,
        description,
        price
      });
      props.history.push(`/groups/${props.match.params.group_id}/items/`)
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }
  
  return (
    <div>
      {  console.log(props)}
      <h1>
        Edit this item
      </h1>
        <div onClick={() => props.history.goBack()}>Back</div>
        {error && <p style={{ color: "darkred" }}>Error Occurred</p>}
        <form onSubmit={handleSubmit}>
          <p>Name</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <p>Description</p>
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
          <p>Price</p>
          <input value={price} onChange={(e) => setPrice(e.target.value)} />
          <button type="submit">Add Item</button>
        </form>

    </div>
  );
};

export default EditItem;