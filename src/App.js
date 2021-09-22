import React from "react";

// Global style
import GlobalStyle from "./conponents/GlobalStyle";

// import Components
import AboutUs from "./pages/AboutUs";
import Nav from "./conponents/Nav";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
