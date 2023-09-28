import { Base_url } from "../../../utils/utils";
import styles from "./Post.module.css";

const Post = ({ post }) => {
  // destructuring the props
  const { title, images, tags, date_posted, publisher_name } = post;
  console.log("post", date_posted);
  return (
    <div className={styles.articleSection}>
      <div className={styles.cardImageContainer}>
        <img
          src={` ${Base_url}${images[0]?.image}`}
          alt="no img"
          className={styles.cardImage}
        />

        {/** post tags of on image absolute position */}
        <div className={styles.postTags}>
          {tags &&
            tags.map((item, index) => (
              <div key={index} className={styles.postTag}>
                {item.tag}
              </div>
            ))}
        </div>
      </div>

      <div className={styles.cardText}>
        <div className={styles.cardHeading}>{title}</div>
        <div className={styles.postInfo}>
          <ul>
            {publisher_name && (
              <li>
                <p>{publisher_name}</p>
              </li>
            )}
            {date_posted && (
              <li>
                <p>{date_posted?.slice(0,10)}</p>
              </li>
            )}
            <li>
              <div className={styles.timeContainer}>
                {/* {time &&
                  <img src={time} alt="" className={styles.cardTimeImage} />
                }   */}
                <p>{post.duration}-min read</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
