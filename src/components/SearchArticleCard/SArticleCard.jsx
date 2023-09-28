import React from 'react'
import styles from "../SearchArticleCard/sArticleCard.module.css"
import time from "../../assets/images/time.svg"
import Dot from "../../assets/images/Dot.svg"

const SArticleCard = ({item}) => {
  return (
    <div className={styles.sArticleCard}>    
            <img src={item?.image} alt="article" width={200} className={styles.image}/>
        <div className={styles.text}>
            <div className={styles.title}>
            {item?.title}
            </div>
            <div className={styles.dateTime}>
                <div className={styles.date}>
                {item?.date}
                </div>
                <div className={styles.time}>
                    <span className={styles.dot}><img src={Dot} alt="dot" /></span>
                    <span><img src={time} alt="time" /></span>
                    <p className={styles.timeText}>
                    {item?.time}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SArticleCard