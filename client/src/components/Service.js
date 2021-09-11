import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";


const Service = ({service, deleteService}) => {
  return (
  
  
    <div>
      <h1>{service.title}</h1>
        <p>{service.description}</p>
        <p>{service.company}</p>
        <p>{`$${service.salary}`}</p>
        {/* <Link to={`/services/${service.id}`}>IDK</Link> */}
        <Button onClick={() => deleteService(service.id)}>Delete</Button>
      
    </div>
  );
};

export default Service;