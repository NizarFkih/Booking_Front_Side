import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./../../SideBar/SideBar.component";
import styles from "./MainLayout.module.scss";
import HotelDetails from "../../../pages/HotelDetails.component";
const MainLayout = () => {
  return (
    <main className={styles.main}>
      <SideBar />
      <Routes>
        <Route path="/hotel" element={<HotelDetails />} />
      </Routes>
    </main>
  );
};

export default MainLayout;
