import React from "react";
import { Switch, Route} from "react-router-dom";
import { Federation } from "../components/index";

function FederationSwitch() {
    return (
        <Switch>
            <Route path="/federacja/:id" children={<Federation />} />
        </Switch>
  );
}

export default FederationSwitch;