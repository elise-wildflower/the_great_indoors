import React, {useEffect, useState} from "react";
import axios from 'axios';
import Item from "./Item";
import NewItem from "./NewItem";
import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Items = (props) => {
  const [group, setGroup] = useState({})
  const [items, setItems] = useState([])
  console.log(props)

  useEffect (() => {
    getItems();
    getGroup()
  }, [])

  const getGroup = async () => {
    try {
      let res = await axios.get(`/api/groups/${props.match.params.group_id}`)
      setGroup(res.data)
      console.log(res.data.group)
    } catch (error) {
      
    }
  }

  const getItems = async () => {
    try {
      let res = await axios.get(`/api/groups/${props.match.params.group_id}/items`)
      setItems(res.data.items)
    } catch (error) {
    }
  }

  const renderItems = () => {
    return items.map((i) => {
      return (
        <div key={i.id}>
          <Item item={i} deleteItem={deleteItem}/>
        </div>
      )
    })
  }

  const deleteItem = async (id) => {
    try {
      await axios.delete(`/api/groups/${props.match.params.group_id}/items/${id}`);
      setItems(items.filter((i) => i.id !== id));
    } catch (error) {
      console.log(error)
    }
  }

  

  return (
    <div style={{margin: "20px"}}>
      <h1>
        {group.name}
      </h1>
      <div>
        <Link to={`/groups/${props.match.params.group_id}/items/new`}>
        <Button style={{margin: "20px"}}>Post an Item</Button>
        </Link>
      </div>
      <Card.Group itemsPerRow={3}> 
      {renderItems()}
      </Card.Group>
    </div>
  );
};
export default Items;