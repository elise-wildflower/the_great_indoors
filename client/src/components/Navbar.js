import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Navbar = () => {
  return (
    <div>
      <h1> Navbar </h1>
      <Link to="/">
        <Button>Home</Button>
        </Link>
      <Link to="/about">
        <Button>About</Button>
        </Link>
      <Link to="/groups/">
        <Button>Shop</Button>
        </Link>
      <Link to="/services">
        <Button>Services</Button>
        </Link>
    </div>
  );
};

export default Navbar;