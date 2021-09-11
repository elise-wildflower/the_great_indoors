import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";

const Group = ( {group, deleteGroup} ) => {
  return (
    <div>
      <Card style={{margin: "20px"}}>
        <Card.Content>
          <Card.Header> {group.name} </Card.Header>
          <Card.Description> {group.description} </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui three buttons">
          <Button basic color="green">
            <Link style={{color: "orange"}} to={`/groups/${group.id}/items`}>View Shop</Link>
          </Button>
          <Button basic color="orange">
          <Link style={{color: "green"}} to={`/groups/${group.id}/edit`}>Edit Shop</Link>
          </Button>          
          < Button basic color='red' onClick={() => deleteGroup(group.id)}>Delete</Button>
          </div>
        </Card.Content>
        </Card> 
    </div>
  )
};

export default Group;