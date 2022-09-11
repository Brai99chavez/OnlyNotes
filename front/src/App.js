import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Route,Switch } from 'react-router-dom'
import CreateCard from "./components/Notes/CreateNote/CreateNote";
import ModifyNote from "./components/Notes/ModifyNote/ModifyNote";
import ArchivedNotes from "./components/Notes/ArchivedNotes/ArchivedNotes";


function App() {
  return (
    <div className="">
      <Route path="/*" exact component={Navbar}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/archiveds" exact component={ArchivedNotes}/>
        <Route path="/create-note" exact component={CreateCard}/>
        <Route path="/modify-card/:id" exact component={ModifyNote}/>
      </Switch>
    </div>
  );
}

export default App;
