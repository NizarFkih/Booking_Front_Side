import { useState } from "react";
import styles from "./Gallery.module.scss";
import { GrNext, GrPrevious } from "react-icons/gr";
const Gallery = ({ pictures = [] }) => {
  const [displayedPicture, setDisplayed] = useState(pictures.slice(0, 3));
  const [restOfPictures, setRest] = useState(pictures.slice(3));
  const handleGallery = (step) => {
    const displayed = [...displayedPicture];
    const rest = [...restOfPictures];
    if (step == "+") {
      displayed.push(rest.shift());
      rest.push(displayed.shift());
    } else {
      displayed.unshift(rest.pop());
      rest.unshift(displayed.pop());
    }
    setDisplayed(displayed);
    setRest(rest);
  };
  return (
    <div className={styles.gallery}>
      <span
        className={`${styles.gallery__action} ${styles.gallery__action___previous}`}
        onClick={() => {
          handleGallery("-");
        }}
      >
        <GrPrevious />
      </span>
      {pictures.length
        ? displayedPicture.map((pict, i) => (
            <img src={pict} key={i} alt="" className={styles.gallery__img} />
          ))
        : ""}

      <span
        className={`${styles.gallery__action} ${styles.gallery__action___next}`}
        onClick={() => {
          handleGallery("+");
        }}
      >
        <GrNext />
      </span>
    </div>
  );
};

export default Gallery;
