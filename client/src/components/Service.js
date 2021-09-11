import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";


const Service = ({service, deleteService}) => {

  return (
  <div style={{margin: "20px"}}>
     <Card>
      <Card.Content>
        <Card.Header>{service.title}</Card.Header>
        <Card.Meta>{service.company}</Card.Meta>
        <Card.Meta>{`$${service.salary}`}</Card.Meta>
        <Card.Description>{service.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
      <div className="ui three buttons">
        <Link to={`/services/${service.id}`}>
        <Button basic color="green"> View Req </Button>
        </Link>
        
        <Link to={`/services/${service.id}/edit/`}>
        <Button basic color="orange">Edit Req </Button>
        </Link>

        <Button basic color="red" onClick={() => deleteService(service.id)}>Delete</Button>
        </div>
        </Card.Content>
        </Card>
    </div>
  );
};

export default Service;