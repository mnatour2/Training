import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ActorTable from "./components/ActorTable";
import TopNav from "./components/TopNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddActor from "./components/AddActor";

const actors = [
  {
    id: "1",
    name: "lele yeet",
    dob: "1999999-99-99",
    image: "lel",
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
      </div>

      <Switch>
        <Route path="/actors">
          <ActorTable actors={actors} />
        </Route>
        <Route path="/addActor">
          <AddActor />
        </Route>
        {/* <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
