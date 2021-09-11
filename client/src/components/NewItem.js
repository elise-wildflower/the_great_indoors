import React, {useState} from "react";
import axios from "axios";

const NewItem = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      await axios.post(`/api/groups/${props.match.params.group_id}/items/`, 
      { id: props.match.params.id, name, description, price });
      props.history.push(`/groups/${props.match.params.group_id}/items/`)
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  
  return (
    <div>
      <h1>
        Post a New Item
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

export default NewItem;