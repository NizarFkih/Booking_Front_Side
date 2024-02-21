import UserProfileAvatar from "../UserProfileAvatar/UserProfileAvatar.component";
import styles from "./Feedback.module.scss";

const Feedback = ({ data }) => {
  return (
    <figure className={styles.feedback}>
      <blockquote className={styles.feedback__text}>{data.text}</blockquote>
      <div className={styles.feedback__overview}>
        <UserProfileAvatar img={data.avatar ? data.avatar : null} />
        <div className={styles.feedback__user}>
          <p className={styles.feedback__username}>{data.username}</p>
          <p className={styles.feedback__createdAt}>{data.createdAt}</p>
        </div>
        <span className={styles.feedback__rate}>{data.rate}</span>
      </div>
    </figure>
  );
};

export default Feedback;
