import styles from "./../styles/layout/SideBar.module.scss";
import { MdHomeFilled, MdFlight, MdDirectionsCar } from "react-icons/md";
import { FaMapSigns } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className={styles.sideNav}>
      <ul className={styles.sideNav__list}>
        <li className={styles.sideNav__listItem}>
          <NavLink to="/hotel" className={styles.sideNav__link}>
            <MdHomeFilled className={styles.sideNav__icon} />
            <span className={styles.sideNav__text}>HOTEL</span>
          </NavLink>
        </li>
        <li className={styles.sideNav__listItem}>
          <NavLink to="/flight" className={styles.sideNav__link}>
            <MdFlight className={styles.sideNav__icon} />
            <span className={styles.sideNav__text}>FLIGHT</span>
          </NavLink>
        </li>
        <li className={styles.sideNav__listItem}>
          <NavLink to="/car" className={styles.sideNav__link}>
            <MdDirectionsCar className={styles.sideNav__icon} />
            <span className={styles.sideNav__text}> CAR RENTAL</span>
          </NavLink>
        </li>
        <li className={styles.sideNav__listItem}>
          <NavLink to="/tours" className={styles.sideNav__link}>
            <FaMapSigns className={styles.sideNav__icon} />
            <span className={styles.sideNav__text}>TOURS</span>
          </NavLink>
        </li>
      </ul>
      <div className={styles.sideNav__copyright}>
        <span>© 2024 by Booking. All rights reserved.</span>
      </div>
    </nav>
  );
};

export default SideBar;
