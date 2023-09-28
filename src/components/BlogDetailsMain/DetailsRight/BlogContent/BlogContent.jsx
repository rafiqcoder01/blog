import styles from "./BlogContent.module.css";

import jungle from "../../../../assets/images/jungle.png";
import { Base_url } from "../../../../utils/utils";
const BlogContent = ({ content,images }) => {
  console.log("content", images);
  return (
    <div className={styles.blogContent}>
      {content}
      <div className={styles.firstdesc}>
        <span className={styles.firstdescTxt}>
          <p className={styles.inTodaysRapidly}>
            {content}
          </p>
        </span>
      </div>
      <div className={styles.secondtitle}>
        The Importance of Sustainability in the Modern World
      </div>
      <div className={styles.firstdesc}>
        <span className={styles.firstdescTxt}>
          <p className={styles.inTodaysRapidly}>
            In today's rapidly changing world, the pressing need for sustainable
            environmental practices has become increasingly evident. As concerns
            about climate change, pollution, and resource depletion grow,
            businesses and individuals alike are seeking innovative solutions to
            address these challenges.
          </p>
          <p className={styles.oneCrucialAvenue}>
            One crucial avenue for achieving sustainability goals is the
            intersection of technology and the environment, where cutting-edge
            advancements offer promising opportunities to create a greener
            future. This blog post delves into the role of technology in
            promoting sustainability and explores how it can be harnessed to
            tackle environmental issues.
          </p>
        </span>
      </div>
      <img
        className={styles.secondthumbIcon}
        alt="no img"
        src={`${Base_url}${images[1]?.image}`}
      />
      <div className={styles.secondtitle}>
        The Importance of Sustainability in the Modern World
      </div>
      <div className={styles.firstdesc}>
        <span className={styles.firstdescTxt}>
          <p className={styles.inTodaysRapidly}>
            In today's rapidly changing world, the pressing need for sustainable
            environmental practices has become increasingly evident. As concerns
            about climate change, pollution, and resource depletion grow,
            businesses and individuals alike are seeking innovative solutions to
            address these challenges.
          </p>
          <p className={styles.oneCrucialAvenue}>
            One crucial avenue for achieving sustainability goals is the
            intersection of technology and the environment, where cutting-edge
            advancements offer promising opportunities to create a greener
            future. This blog post delves into the role of technology in
            promoting sustainability and explores how it can be harnessed to
            tackle environmental issues.
          </p>
        </span>
      </div>
      <div className={styles.secondtitle}>
        The Importance of Sustainability in the Modern World
      </div>
      <div className={styles.firstdesc}>
        <span className={styles.firstdescTxt}>
          <p className={styles.inTodaysRapidly}>
            In today's rapidly changing world, the pressing need for sustainable
            environmental practices has become increasingly evident. As concerns
            about climate change, pollution, and resource depletion grow,
            businesses and individuals alike are seeking innovative solutions to
            address these challenges.
          </p>
          <p className={styles.oneCrucialAvenue}>
            One crucial avenue for achieving sustainability goals is the
            intersection of technology and the environment, where cutting-edge
            advancements offer promising opportunities to create a greener
            future. This blog post delves into the role of technology in
            promoting sustainability and explores how it can be harnessed to
            tackle environmental issues.
          </p>
        </span>
      </div>
    </div>
  );
};

export default BlogContent;
