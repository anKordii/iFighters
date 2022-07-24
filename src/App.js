import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation, Projects, Footer, Privacy, BackTop, Upcoming } from "./components/frontend";
import { NotFound, Alert } from "./components/frontend/components";
import { Wiki, FighterSwitch, Belt, New, SearchPage, FederationSwitch } from "./components/frontend/pages";

function App() {
  return (
    <Router>
      <Alert />
      <Navigation />
      <BackTop />
      <Switch>
          <Route path="/privacy" exact component={() => <Privacy />} />
          <Route path="/" exact component={() => <Projects />} />
          <Route path="/wiki" exact component={() => <Wiki />} />
          <Route path="/champions" exact component={() => <Belt />} />
          <Route path="/new" exact component={() => <New />} />
          <Route path="/searching" exact component={() => <SearchPage />} />
          <Route path="/fighter/:id" exact component={() => <FighterSwitch />} />
          <Route path="/federacja/:id" exact component={() => <FederationSwitch />} />
          <Route component={NotFound} />
      </Switch>
      <Upcoming />
      <Footer />
    </Router>
  );
}

export default App;
