import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Service from './Service';
import { Button, Card } from "semantic-ui-react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect (() => {
    getServices();
  },[])


  const getServices = async () => {
    try {
        let res = await axios.get("/api/services");
        setServices(res.data);
    } catch (err) {
      console.log(err);
    };
  };


  const renderServices = () => {
      return services.map(service => {
        return (
          <div key={service.id}>
            <Service service={service} deleteService={deleteService}/>
          </div>
        );
      });

};

const deleteService = async (id) => {
  try {
      await axios.delete(`/api/services/${id}`);
      setServices(services.filter((s) => s.id !==id));
  }   catch (err) {
      console.log(err);
  }
};



  return (
    <div>
      
      <Link to="/services/new/"> 
      <Button style={{marginTop: "26px"}}> 
        Add Service Requisition 
      </Button>
      </Link> 

      <h1> All Open Service Requisions </h1>
      <Card.Group itemsPerRow={3}>
      {renderServices()}
      </Card.Group>

    </div>
  )
};

export default Services;
