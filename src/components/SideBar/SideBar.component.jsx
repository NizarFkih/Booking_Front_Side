import styles from "./SideBar.module.scss";
import { MdHomeFilled, MdFlight, MdDirectionsCar } from "react-icons/md";
import { FaMapSigns } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className={styles.sideNav}>
      <ul className={styles.sideNav__list}>
        <li className={styles.sideNav__listItem}>
          <NavLink to="/hotel" className={styles.link}>
            <MdHomeFilled className={styles.link__icon} />
            <span className={styles.link__text}>hotel</span>
          </NavLink>
        </li>
        <li className={styles.sideNav__listItem}>
          <NavLink to="/flight" className={styles.link}>
            <MdFlight className={styles.link__icon} />
            <span className={styles.link__text}>flight</span>
          </NavLink>
        </li>
        <li className={styles.sideNav__listItem}>
          <NavLink to="/car" className={styles.link}>
            <MdDirectionsCar className={styles.link__icon} />
            <span className={styles.link__text}>car rental</span>
          </NavLink>
        </li>
        <li className={styles.sideNav__listItem}>
          <NavLink to="/tours" className={styles.link}>
            <FaMapSigns className={styles.link__icon} />
            <span className={styles.link__text}>tours</span>
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
