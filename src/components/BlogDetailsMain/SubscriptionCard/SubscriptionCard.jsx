import { useRef, useState } from "react";
import styles from "./SubscriptionCard.module.css";

const SubscriptionCard = () => {
 const [searchValue, setSearchValue] = useState("");
    

    

    const inputRef = useRef();
    const handleKeyDown = (event) => {
      setSearchValue(inputRef.current.value);
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchValue === ""){
      alert("empty");
    }else{
      // check value is valid or not
     
        alert("valid");
      
    }
  }
  return (
    <div className={styles.subscriptionCard}>
      <div className={styles.subTitle}>Subscribe to weekly Bites</div>
      <div className={styles.subContainer}>
        <span className={styles.subContainer1}>
          <p
            className={styles.date}
          >{`Stay up-to-date with the latest news & trends. Simple and direct information, delivered directly to your inbox.`}</p>
          <p className={styles.joinOurCommunity}>
            Join our community of 5,000+ members today.
          </p>
        </span>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        
          <input
            type="email"
            placeholder="Enter your email"
            ref={inputRef}
            className={styles.email}
            onChange={handleKeyDown}
          />
        
        <div className={styles.frameParent}>
          <button type="submit" className={styles.letsGo}>Let’s go</button>

          <div className={styles.itsAbsolutelyFree}>
            It’s absolutely free. Seriously.
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionCard;
