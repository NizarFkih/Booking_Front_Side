import NavBar from "./components/NavBar.component";
import SideBar from "./components/SideBar.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
      <SideBar />
    </Router>
  );
}

export default App;
