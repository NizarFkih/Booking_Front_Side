import styles from "./../styles/layout/NotificationPanel.module.scss";
const NotificationPanel = ({ title,children }) => {
  return (
    <div className={styles.panelBox}>
      <p className={styles.panelBox__title}>{title}</p>
      Coming Soon...
    </div>
  );
};

export default NotificationPanel;
