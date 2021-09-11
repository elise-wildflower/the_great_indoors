import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Group = ( {group, deleteGroup} ) => {
  return (
    <div>
      <h1>{group.name}</h1>
      <p>{group.description}</p>
     <Button>
       <Link to={`/groups/${group.id}/items`}>{`Go to ${group.name}`}</Link>
      </Button> 

      <Button>
      <Link to={`/groups/${group.id}/edit`}>{`Edit ${group.name}`}</Link>
      </Button>
      
      < Button basic color='red' onClick={() => deleteGroup(group.id)}>Delete</Button>
    </div>
  );
};

export default Group;