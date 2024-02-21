import styles from "./OverviewBar.module.scss";
import RatingStars from "../common/RatingStars/RatingStars.component";
import { FaLocationDot } from "react-icons/fa6";

const HeadBar = ({ data }) => {
  return (
    <header className={styles.overview}>
      <div className={styles.overview__info}>
        <h1 className={styles.overview__heading}>
          {data?.title ? data.title : "hotel las palms"}
        </h1>

        <div className={styles.overview__class}>
          <RatingStars />
        </div>
      </div>
      <div className={styles.overview__info}>
        <div className={styles.overview__location}>
          <FaLocationDot />
          <span>{data?.location ? data.location : "albufeira, portugal"}</span>
        </div>
        <div className={styles.overview__rating}>
          <span className={styles.overview__rating___avg}>
            {data?.rate ? data.rate : "8.6"}
          </span>
          <span className={styles.overview__rating___numb}>
            {data?.votes ? data.votes : "8.6"}, votes
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeadBar;
