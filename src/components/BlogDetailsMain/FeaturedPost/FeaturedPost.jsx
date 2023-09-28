import time from "../../../assets/images/time.svg";
import windmill from "../../../assets/images/windmill.png";
import styles from "./FeaturedPost.module.css";
const FeaturedPost = () => {
  return (
    <div className={styles.featuredPost}>
      <div className={styles.featuredThisWeek}>Featured this week</div>
      <div className={styles.blogCard}>
        <img alt="" src={windmill} />
        <div className={styles.tags}>
          <div className={styles.category}>
            <div className={styles.policy}>Policy</div>
          </div>
          <div className={styles.category}>
            <div className={styles.policy}>Social Governance</div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.title}>
            Sustainable and Equitable Investing: Embracing ESG for a Better
            Future
          </div>
          <div className={styles.footer}>
            <div className={styles.author}>Sarah Williams</div>
            <div className={styles.footerChild} />
           
            <div className={styles.footerItem} />
            <div className={styles.timeArea}>
              <img className={styles.timeIcon} alt="" src={time} />
              <div className={styles.author}>2-min read</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
