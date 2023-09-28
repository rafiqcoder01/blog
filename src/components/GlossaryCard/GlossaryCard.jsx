import React from 'react'
import styles from "./glosaryCard.module.css"

const GlossaryCard = ({item}) => {
  return (
    <div className={styles.glossaryCard}>
        <div className={styles.title}>
        {item?.title}
        </div>
        <div className={styles.text}>
        {item?.text}
        </div>
    </div>
  )
}

export default GlossaryCard