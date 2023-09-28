import styles from "./SimilarPost.module.css";
import tag from "../../../assets/icons/tag.svg";
import time from "../../../assets/images/time.svg";
const SimilarPost = () => {
  return (
    <div className={styles.similarPosts}>
      <div className={styles.title}>Similar posts</div>
      <div className={styles.postcontainer}>
        <div className={styles.content}>
          <div className={styles.posttitle}>
            ESG-driven Industrial Reforms: Redefining Business Models for a
            Sustainable Economy
          </div>
          <div className={styles.postfooter}>
            <div className={styles.tags}>
                          <img className={styles.tagicon} alt="" src={tag} />
              <div className={styles.tagtext}>Policy</div>
              <div className={styles.tagsChild} />
              <div className={styles.tagtext}>Social Governance</div>
              <div className={styles.tagsItem} />
              <div className={styles.timerSvgrepoCom2Parent}>
                <img
                  className={styles.tagicon}
                  alt=""
                  src={tag}
                />
                <div className={styles.tagtext}>2-min read</div>
              </div>
            </div>
            <div className={styles.timearea}>
                          <img className={styles.tagicon} alt="" src={time} />
              <div className={styles.tagtext}>9-min read</div>
            </div>
          </div>
        </div>
        <div className={styles.borderbottom} />
       
      </div>
    </div>
  );
};

export default SimilarPost;
