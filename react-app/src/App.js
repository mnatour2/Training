import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Actors from "./components/Actor/Actors";
import TopNav from "./components/TopNav";
import CreateActor from "./components/Actor/CreateActor";
import Home from "./components/Home";
import CreateUser from "./components/User/CreateUser";
import Users from "./components/User/Users";
import Movies from "./components/Movie/Movies";
import CreateMovie from "./components/Movie/CreateMovie";
import Login from "./components/Login";
import Register from "./components/Register";

const actors = [
  {
    id: "1",
    name: "lele yeet",
    dob: "1999999-99-99",
    image: "lel",
  },
];

const movies = [
  {
    id: "1",
    name: "batman",
    year: "2020",
    country: "merica",
    poster: "lel",
  },
];

const users = [
  {
    id: "1",
    username: "natour",
    email: "n@gmail.com",
    mobile: "0599",
    profilePic: "lelee",
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
      </div>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/actors">
          <Actors actors={actors} />
        </Route>
        <Route path="/createActor">
          <CreateActor />
        </Route>
        <Route path="/users">
          <Users users={users} />
        </Route>
        <Route path="/createUser">
          <CreateUser />
        </Route>
        <Route path="/movies">
          <Movies movies={movies} />
        </Route>
        <Route path="/createMovie">
          <CreateMovie />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
