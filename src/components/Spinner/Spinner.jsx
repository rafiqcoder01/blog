import React from 'react'
import styles from './spinner.module.css'
import { Oval } from  'react-loader-spinner'

const Spinner = ({text}) => {
  return (
    <div className={styles.spinner}>
        <Oval
  height={84}
  width={84}
  color="#81298F"
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#d3b5d8ff"
  strokeWidth={5}
  strokeWidthSecondary={5}

/>
<div className={styles.text}>
Hold on, we're finding the best results...
</div>
    </div>
  )
}

export default Spinner