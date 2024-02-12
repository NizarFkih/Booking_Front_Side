import styles from "./../styles/layout/NavBar.module.scss";
import logo from "./../assets/logo.png";
import user from "./../assets/user.jpg";
import { IoMdNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import NotificationPanel from "./NotificationPanel.component";
import { useState } from "react";

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
      <a href="/" className={styles.header__logoBox}>
        <img src={logo} alt="logo" className={styles.header__logo} />
      </a>

      <div className={styles.header__searchBox}>
        <input
          type="search"
          name="searchBar"
          id=""
          placeholder="Search hotels"
          className={styles.header__searchBar}
        />
        <IoSearch className={styles.header__searchBox__searchIcon} />
      </div>

      <nav className={styles.userNav}>
        {isOpen ? <NotificationPanel title={title} /> : ""}
        <div
          className={`${styles.userNav__iconBox} ${
            title == "Notifications" ? styles.userNav__iconBox___onFocus : ""
          }`}
          onClick={() => panelHandler("Notifications")}
        >
          <IoMdNotifications />
          <span className={styles.userNav__notification}>3</span>
        </div>
        <div
          className={`${styles.userNav__iconBox} ${
            title == "Messages" ? styles.userNav__iconBox___onFocus : ""
          }`}
          onClick={() => panelHandler("Messages")}
        >
          <RiMessage2Fill />
          <span className={styles.userNav__message}>2</span>
        </div>
        <div
          className={`${styles.userNav__iconBox} ${
            title == "Control Panel" ? styles.userNav__iconBox___onFocus : ""
          }`}
          onClick={() => panelHandler("Control Panel")}
        >
          <img src={user} alt="" className={styles.userPicture} />
          <span className={styles.userNav__userName}>Nizar</span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
