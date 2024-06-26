import OverviewBar from "../../components/OverviewBar/OverviewBar.component.jsx";
import SectionLayout from "../../components/Layout/SectionLayout/SectionLayout.component.jsx";
import Gallery from "../../components/Gallery/Gallery.component.jsx";
import styles from "./HotelDetails.module.scss";
import { hotelData } from "../../data.js";
import Feedback from "../../components/common/Feedback/Feedback.component.jsx";
import { GrNext } from "react-icons/gr";

import UserProfileAvatar from "../../components/common/UserProfileAvatar/UserProfileAvatar.component.jsx";
import { useState } from "react";
const HotelDetails = () => {
  const data = hotelData();
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <SectionLayout>
      <Gallery pictures={data.pictures} />
      <OverviewBar
        data={{
          name: data.name,
          rate: data.rate,
          stars: data.stars,
          votes: data.votes,
        }}
      />
      <div className={styles.container}>
        <div className={styles.container__mainSection}>
          {data.descriptions.map((desc, index) => (
            <p className={styles.description} key={index}>
              {desc}
            </p>
          ))}

          <ul className={styles.list}>
            {data.services.map((service, index) => (
              <li className={styles.list__item} key={index}>
                <GrNext className={styles.list__icon} />
                {service}
              </li>
            ))}
          </ul>
          <div className={styles.recommend}>
            <p className={styles.recommend__text}>
              More than {data.recommendedBy.length - 1} other friends recommend
              this hotel.
            </p>
            <div className={styles.recommend__list}>
              {data.recommendedBy.map((user, index) => (
                <UserProfileAvatar
                  key={index}
                  img={user}
                  customStyle={{
                    boxSizing: "content-box",
                    border: "3px solid #fff",
                    marginLeft: "-1.5rem",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.sideSection}>
          <div
            className={styles.sideSection__feedbacks}
            style={{ overflowY: showMore ? "scroll" : "hidden" }}
          >
            {data.feedbacks.map((item, index) => (
              <Feedback key={index} data={item} />
            ))}
          </div>
          <button
            className={styles.sideSection__feedbacks___displayMore}
            onClick={handleShowMore}
          >
            {showMore ? "Show Less" : "Show More"} <span>&rarr;</span>{" "}
          </button>
        </div>
      </div>
      <div className={styles.cta__box}>
        <h2>good news! we have 4 free rooms for your selected dates!</h2>
        <button className={styles.btn}>
          <span className={styles.btn__visible}>book now</span>
          <span className={styles.btn__hidden}>only 4 room left</span>
        </button>
      </div>
    </SectionLayout>
  );
};

export default HotelDetails;
