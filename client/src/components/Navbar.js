import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Navbar = () => {
  return (
    <div style={{padding: "20px"}}>
      <h1> The Great Indoors </h1>
      <Link to="/">
        <Button>Home</Button>
        </Link>
      <Link to="/about">
        <Button>About</Button>
        </Link>
      <Link to="/groups">
        <Button>Shop</Button>
        </Link>
      <Link to="/services">
        <Button>Services</Button>
        </Link>
    </div>
  );
};

export default Navbar;