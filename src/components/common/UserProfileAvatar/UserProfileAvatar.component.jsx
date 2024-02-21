import styles from "./UserProfileAvatar.module.scss";
import avatar from "./../../../assets/avatar.png";
const UserProfileAvatar = ({ img, customStyle = {} }) => {
  return (
    <div className={styles.avatar} style={{ ...customStyle }}>
      <img src={img?img:avatar} alt="avatar" className={styles.avatar__img} />
    </div>
  );
};

export default UserProfileAvatar;
