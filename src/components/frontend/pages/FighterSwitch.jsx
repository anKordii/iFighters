import React from "react";
import { Switch, Route} from "react-router-dom";
import { Fighter } from "../components/index";

function FighterSwitch() {
    return (
        <Switch>
            <Route path="/fighter/:id" children={<Fighter />} />
        </Switch>
  );
}

export default FighterSwitch;