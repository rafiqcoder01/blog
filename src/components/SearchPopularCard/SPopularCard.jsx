import React from 'react'
import styles from './sPopularCard.module.css'
import tag from "../../assets/images/tag.svg"
import dot from "../../assets/images/Dot.svg"
import time from "../../assets/images/time.svg"

const SPopularCard = () => {
  return (
    <div className={styles.sPopularCard}>
    <div className={styles.heading}>
    ESG-driven Industrial Reforms: Redefining Business Models for a Sustainable Economy
    </div>
    <div className={styles.text}>
    <div className={styles.textElem}>
    <img src={tag} alt="tag" />
    <span>Policy</span>
    </div>
    <div className={styles.textElem}>
    <img src={dot} alt="dot" />
    <span>Social Governance</span>
    </div>
    <div className={styles.time}>
    <img src={time} alt="time icon" />
    <span>9 min read</span>
    </div>
    </div>
    </div>
  )
}

export default SPopularCard