import styles from "./RatingStars.module.scss";
import { IoStarOutline, IoStar } from "react-icons/io5";
const RatingStars = ({ rate = 3 }) => {
  const items = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <span className={styles.ratingStars}>
      {items.map((item, index) => {
   
        if (item <= rate) {
          return <IoStar key={index} className={styles.ratingStars__icon} />;
        } else {
          return (
            <IoStarOutline key={index} className={styles.ratingStars__icon} />
          );
        }
      })}
    </span>
  );
};

export default RatingStars;
