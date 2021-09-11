import React, { useState, useEffect } from "react";
import axios from "axios";
import Group from "./Group";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Groups = () => {
  const [groups, setGroups] = useState([]);

  useEffect (() => {
    getGroups();
  }, []);

  const getGroups = async () => {
    try{
      let res = await axios.get("/api/groups");
      setGroups(res.data);
      console.log(res.data);
      } catch (error) {
        console.log(error)
        alert("What are you doing!?")
    }
  };

  const deleteGroup = async (id) => {
    try {
      await axios.delete(`/api/groups/${id}`);
      setGroups(groups.filter((g) => g.id !==id));
    } catch (error) {
      console.log(error);
    }
  };

  const renderGroups = () => {
    return groups.map( group => {
      return (
        <div key={group.id}>
          <Group group={group} deleteGroup={deleteGroup}/>
        </div>
      )
    })
  };


    return (
    <div>
        <Button style={{marginTop: "26px"}}>
          <Link to="/groups/new">Add Shop</Link>
         </Button>
        {renderGroups()}
    </div>
  );
};

export default Groups;