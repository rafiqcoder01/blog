
import FeaturedPost from "../FeaturedPost/FeaturedPost";
import SimilarPost from "../SimilarPost/SimilarPost";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";
import styles from "./DetailsRight.module.css";
const DetailsRight = () => {
  return (
    <div className={styles.sideContent}>
      <div className={styles.similarPosts}>
       <SimilarPost></SimilarPost>
      </div>
      <div className={styles.subscriptionCard}>
        <SubscriptionCard />
      </div>
      <div className={styles.similarPosts}>
        <FeaturedPost />
        
      </div>
    </div>
  );
};

export default DetailsRight;
