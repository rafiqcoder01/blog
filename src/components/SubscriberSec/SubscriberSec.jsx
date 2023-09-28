import React from "react";
import styles from "./SubscriberSec.module.css";

const SubscriberSec = () =>{
  return (
    <div className={`mainContainer`} id="subscribe">
    <div className={`${styles.container}`}>
      <h2>
        Join 5,000+ subscribers getting the best ideas on environment,
        technology and more!
      </h2>
      <p>We promise we won't spam you and you can unsubscribe anytime</p>
      <div className={styles.emailArea}>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.input}
        />
        <button className={styles.button}>Subscribe</button>
      </div>
    </div>
    </div>
  );
}
export default SubscriberSec;
