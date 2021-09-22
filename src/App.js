import React from "react";

// Global style
import GlobalStyle from "./conponents/GlobalStyle";

// import Components
import AboutUs from "./pages/AboutUs";
import Nav from "./conponents/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

// Router
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Switch>
        <Route path="/" exact >
          <AboutUs />
        </Route>

        <Route path="/work" exact>
          <OurWork />
        </Route>

        <Route path="/work/">
          <MovieDetail/>
        </Route>

        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
