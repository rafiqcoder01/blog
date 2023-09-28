import React from "react";
import calender from "../../assets/images/calender.svg";
import location from "../../assets/images/location.svg";
import shareIcon from "../../assets/images/share.svg";
import { Base_url } from "../../utils/utils";
import styles from "./upcomingcard.module.css";
import dateFormat,{masks} from "dateformat";

const UpcomingCard = ({ item }) => {
  masks.hammerTime = 'd mmm, yyyy'
  return (
    <div className={styles.upcomingcard}>
      <img
        src={`${Base_url}${item?.image}`}
        alt="imag"
        width={410}
        height={283}
        className={styles.cardImage}
      />
      <div className={styles.text}>
        <div className={styles.first}>
          <p className={styles.cardHeading}>
            {item?.about_event?.length > 30
              ? item?.about_event?.slice(0, 30) + "..."
              : item?.about_event}
          </p>
          <div className={styles.shareButton}>
            <img src={shareIcon} alt="share" />
          </div>
        </div>
        <p className={styles.cardDate}>
          <img src={calender} alt="calender" /> {dateFormat(item?.date,'hammerTime') }
        </p>
        <p className={styles.cardLocation}>
          <img src={location} alt="location" />
          {item?.location}
        </p>
      </div>
    </div>
  );
};

export default UpcomingCard;
