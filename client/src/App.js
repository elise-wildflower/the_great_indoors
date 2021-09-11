import logo from './logo.svg';
import './App.css';
import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';

function App() {
  return (
      <>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/groups" component={Groups} />
          <Route path="/groups/new" component={NewGroup} />
          <Route path="/groups/:id" component={Group} />
          <Route path="/groups/:id/edit" component={EditGroup} />
          <Route path="/groups/:group_id/items" component={Items} />
          <Route path="/groups/:group_id/items/new" component={NewItem} />
          <Route path="/groups/:group_id/items/:id" component={Item} />
          <Route path="/groups/:group_id/items/:id/edit" component={EditItem} />
          <Route path="/services" component={Services} />
          <Route path="/services/new" component={NewService} />
          <Route path="/services/:id" component={Service} />
          <Route path="/services/:id/edit" component={EditService} />
        </Switch>
      </>
  );
}

export default App;
