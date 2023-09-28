import time from "../../../assets/images/time.svg";
import { Base_url } from "../../../utils/utils";
import styles from "./SideCard.module.css";
const SideCard = ({ data }) => {
  const { images,tag,publisher_name } = data;
  console.log("sidecard", data);
  return (
    <div className={styles.articleSection}>
      {images && (
        <div className={styles.cardImageContainer}>
          {/** get the first image from images array and use as img sourch */}
          {
            images[0]?.image && (
              <img src={` ${Base_url}${images[0]?.image}`} alt="no img" className={styles.cardImage} />
            )
          }
          {/* <img src={images[0]?.image} alt="no img" className={styles.cardImage} /> */}

          {/** post tags of on image absolute position */}
          {/* {tags && (
          <img src={images[0].image} alt="no img" className={styles.cardImage} />

          {/** post tags of on image absolute position */}
          {/* {tags && (
          <div className={styles.postTags}>
            <div className={styles.postTag}>Policy</div>
            <div className={styles.postTag}>Social Governance</div>
          </div>
        )} */}
        </div>
      )}
      <div className={styles.cardText}>
        <div className={styles.cardHeading}>{data.title}</div>
        <div className={styles.postInfo}>
          <ul>
            {publisher_name && (
              <li className={styles.postTag}>{publisher_name}</li>
            )}
            <div className={styles.timeContainer}>
              <img src={time} alt="" className={styles.cardTimeImage} />
              <p>{data.duration}-min read</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
