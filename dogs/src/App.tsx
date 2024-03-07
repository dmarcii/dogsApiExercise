import React from "react";
import List from "./components/List";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      {/*   <Switch> */}
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/details/:id" element={<Details />} />
        {/*    </Switch> */}
      </Routes>
    </Router>
  );
}

export default App;
