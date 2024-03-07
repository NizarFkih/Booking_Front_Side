import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./../../SideBar/SideBar.component";
import styles from "./MainLayout.module.scss";
import HotelDetails from "../../../pages/HotelDetails/HotelDetails.component";
import PageNotFound from "../../../pages/pageNotFound/PageNotFound.component";
import Home from "../../../pages/Home/Home.component";
const MainLayout = () => {
  return (
    <main className={styles.main}>
      <SideBar />
      <Routes>
      <Route path="/" index element={<Home />} />
        <Route path="/hotel" element={<HotelDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default MainLayout;
