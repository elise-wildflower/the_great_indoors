import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Service from './Service';
import { Button } from "semantic-ui-react";

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
      <Button> 
        <Link to="/services/new/"> Add Service REQ </Link> 
      </Button>
      <h1> Services </h1>
      {renderServices()}

    </div>
  )
};

export default Services;
