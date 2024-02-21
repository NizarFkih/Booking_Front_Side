import MainLayout from "./components/Layout/MainLayout/MainLayout.component";
import NavBar from "./components/NavBar/NavBar.component";

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
