import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import axios from "axios";

const ShowService = ( {id, deleteService} ) => {
 const [service, setService] = useState({});

 useEffect (() => {
    getService();
  },[])


  const getService = async () => {
    try {
        let res = await axios.get(`/api/services/${id}`);
        // setService(res.data);
        console.log(res.data)
    } catch (err) {
      console.log(err);
    };
  };

  return(
    <div style={{margin: "20px"}}>
      <Card>
          <Card.Content>
            <Card.Header>{service.title}</Card.Header>
            <Card.Meta>{service.company}</Card.Meta>
            <Card.Meta>{`$${service.salary}`}</Card.Meta>
            <Card.Description>{service.description}</Card.Description>
          </Card.Content>

          <Card.Content extra>
          <div className="ui two buttons">
            
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


export default ShowService;