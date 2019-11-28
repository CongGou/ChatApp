import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Jion from "./components/Jion";
import Chat from "./components/Chat";

const App = () => (
  <BrowserRouter>
    <Route path="/" exact component={Jion} />
    <Route path="/chat" component={Chat} />
  </BrowserRouter>
);

export default App;
