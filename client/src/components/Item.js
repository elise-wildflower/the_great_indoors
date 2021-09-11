import React from "react";
import axios from "axios";
import { useHistory , Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";

const Item = ({item , deleteItem}) => {

  return (
    <div style={{margin: "20px"}}>
    <Card style={{margin: "20px"}}>
      <Card.Content>
        <Card.Header>  {item.name} </Card.Header>
        <Card.Meta> {`$${item.price}`} </Card.Meta>
        <Card.Description> {item.description} </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
        <Button basic color="orange">
        <Link style={{color: "green"}} to={`/groups/${item.group_id}/items/${item.id}/edit`}>{`Edit ${item.name}`}</Link>
        </Button>          
        < Button basic color='red' onClick={() =>  deleteItem(item.id)}>Delete</Button>
        </div>
      </Card.Content>
      </Card> 
  </div>
  );
};

export default Item;
