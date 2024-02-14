import styles from "./../styles/layout/NavBar.module.scss";
import logo from "./../assets/logo.png";
import user from "./../assets/user.jpg";
import { IoMdNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import NotificationPanel from "./NotificationPanel.component";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const panelHandler = (label) => {
    setTitle(label);
    if (!isOpen) {
      setIsOpen(true);
    } else if (title == label) {
      setIsOpen(!isOpen);
      setTitle("");
    }
  };
  return (
    <header className={styles.header}>
      <NavLink href="/" className={styles.header__logoBox}>
        <img src={logo} alt="logo" className={styles.header__logo} />
      </NavLink>

      <div className={styles.header__search}>
        <input
          type="search"
          name="searchBar"
          id=""
          placeholder="Search hotels"
          className={styles.header__searchInput}
        />
        <IoSearch className={styles.header__searchIcon} />
      </div>

      <nav className={styles.header__nav}>
        {isOpen ? <NotificationPanel title={title} /> : ""}
        <div
          className={`${styles.header__navItem} ${
            title == "Notifications" ? styles.header__navItem___onFocus : ""
          }`}
          onClick={() => panelHandler("Notifications")}
        >
          <IoMdNotifications />
          <span className={styles.header__navItem___counter}>3</span>
        </div>
        <div
          className={`${styles.header__navItem} ${
            title == "Messages" ? styles.header__navItem___onFocus : ""
          }`}
          onClick={() => panelHandler("Messages")}
        >
          <RiMessage2Fill />
          <span className={styles.header__navItem___counter}>2</span>
        </div>
        <div
          className={`${styles.header__navItem} ${
            title == "Control Panel" ? styles.header__navItem___onFocus : ""
          }`}
          onClick={() => panelHandler("Control Panel")}
        >
          <img src={user} alt="" className={styles.header__navAvatar} />
          <span className={styles.header__navUsername}>Nizar</span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
