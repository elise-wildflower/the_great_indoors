import React from "react";
import axios from "axios";
import { useHistory , Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Item = ({item , deleteItem}) => {

  return (
    <div>
      <h1>
        {item.name}
      </h1>
      <p>{item.description}</p>
      <p>{`$${item.price}`}</p>
      <Button>
        <Link to={`/groups/${item.group_id}/items/${item.id}/edit`}>
          Edit
        </Link> 
      </Button>
      <Button onClick={()=> deleteItem(item.id)}>Delete</Button>

    </div>
  );
};

export default Item;
