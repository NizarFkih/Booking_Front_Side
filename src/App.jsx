import MainLayout from "./components/MainLayout.component";
import NavBar from "./components/NavBar.component";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
      <MainLayout />
    </Router>
  );
}

export default App;
