import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Button } from "semantic-ui-react";

const Item = ({item , deleteItem}) => {

  return (
    <div>
      <h1>
        {item.name}
      </h1>
      <p>{item.description}</p>
      <p>{`$${item.price}`}</p>
      <Button onClick={()=> deleteItem(item.id)}>Delete</Button>
    </div>
  );
};

export default Item;
