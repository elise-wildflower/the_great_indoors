import logo from './logo.svg';
import './App.css';
import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Groups from "./components/Groups";
import NewGroup from "./components/NewGroup";
import Group from "./components/Group";
import EditGroup from "./components/EditGroup";
import Items from "./components/Items";
import Item from "./components/Item";
import NewItem from "./components/NewItem";
import EditItem from "./components/EditItem";
import Services from "./components/Services";
import NewService from "./components/NewService";
import Service from "./components/Service";
import EditService from './components/EditService';

function App() {
  return (
      <>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/groups/new" component={NewGroup} />
          <Route exact path="/groups/:id" component={Group} />
          <Route exact path="/groups/:id/edit" component={EditGroup} />
          <Route exact path="/groups/:group_id/items" component={Items} />
          <Route exact path="/groups/:group_id/items/new" component={NewItem} />
          <Route exact path="/groups/:group_id/items/:id" component={Item} />
          <Route exact path="/groups/:group_id/items/:id/edit" component={EditItem} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/services/new" component={NewService} />
          <Route exact path="/services/:id" component={ShowService} />
          <Route exact path="/services/:id/edit" component={EditService} />
        </Switch>
      </>
  );
}

export default App;
