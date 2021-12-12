import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Pagination />
      </Router>
    </>
  );
};

export default App;
