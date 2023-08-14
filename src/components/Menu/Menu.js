import { Switch, Route, Redirect } from "react-router-dom";

import All from "../Pages/All";
import Board from "../Pages/Board";
import Graph from "../Pages/Graph";
import Recent from "../Pages/Recent";

import "./Menu.css";

const Menu = () => {
  return (
    <>
    <div className="menu-container">
      <Switch>
        <Route path="/" exact>
          <Redirect to="all" />
        </Route>
        <Route path="/all" exact>
          <All />
        </Route>
        <Route path="/board">
          <Board />
        </Route>
        <Route path="/graph">
          <Graph />
        </Route>
        <Route path="/recent">
          <Recent />
        </Route>
      </Switch>
      </div>
    </>
  );
};

export default Menu;
