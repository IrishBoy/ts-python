import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { InfiniteScrollPage } from "../pages/InfiniteScrollPage"; // Adjusted import

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={InfiniteScrollPage} exact />
    </Switch>
  </Router>
);

export default App;
