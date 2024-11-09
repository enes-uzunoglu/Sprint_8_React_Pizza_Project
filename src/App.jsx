import React from "react";
import "./Style/reset.css";
import "./Style/App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import HomePage from "./Components/HomePage"; // buraya da bak!
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScroollToTop from "./Components/ScroolToTop";
import OrderApproved from "./Components/OrderApproved";

function App() {
  return (
    <Router>
      {/** bu ne işe yarıyor */}
      <ScroollToTop> </ScroollToTop>
      <Switch>
        <Route path="/" exact>
          <HomePage> </HomePage>
        </Route>
        <Route path="/form">
          <Header> </Header>
          <Form> </Form>
        </Route>
        <Route path="/approved">
          <OrderApproved> </OrderApproved>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
