import styles from "./../styles/layout/SectionLayout.module.scss";
const SectionLayout = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default SectionLayout;
