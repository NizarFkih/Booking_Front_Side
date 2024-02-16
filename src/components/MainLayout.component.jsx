import SectionLayout from "./SectionLayout.component";
import SideBar from "./SideBar.component";
import styles from "./../styles/layout/MainLayout.module.scss";
const MainLayout = () => {
  return (
    <main className={styles.main}>
      <SideBar />
      <SectionLayout />
    </main>
  );
};

export default MainLayout;
