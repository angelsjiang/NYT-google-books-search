import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} status={200} />
          <Route exact path="/saved" component={Saved} status={200} />
          <Route component={NoMatch} status={404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
