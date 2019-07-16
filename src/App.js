import React from "react";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreateThread from "./pages/CreateThread";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { BlogProvider } from "./store/BlogContext";

const App = () => {
  return (
    <BlogProvider>
      <Router>
        <Switch>
          <Route path="/admin" exact component={Admin} />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/create-thread" exact component={CreateThread} />
        </Switch>
      </Router>
    </BlogProvider>
  );
};

export default App;
