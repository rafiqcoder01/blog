import styles from "./KeyBites.module.css";
import frameBottom from "../../../../assets/icons/frameBottom.svg";
import frameTop from "../../../../assets/icons/frameTop.svg";
import greenTik from "../../../../assets/icons/greenTik.svg";
const KeyBites = ({ data }) => {
  console.log("keybites:", data);
  return (
    <div className={styles.keybites}>
      <div className={styles.keycontainer}>
        <div className={styles.title}>Key Bites:</div>

        {
          data?.map((item,index) => (
            
        <li className={styles.point}>
          <div className={styles.check}>
            <img className={styles.vectorIcon} alt="" src={greenTik} />
          </div>
          <i className={styles.pointText}>
            ESG integration drives financial performance while promoting
            positive social and environmental impact.
          </i>
            </li>
          ))
        }

        
      </div>
      <img className={styles.keybitesChild} alt="" src={frameTop} />
      <img className={styles.keybitesItem} alt="" src={frameBottom} />
    </div>
  );
};

export default KeyBites;
