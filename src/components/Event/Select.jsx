import React from "react";
import styles from "./Select.module.css";
const Select = ({ options, setCategory, category }) => {
  return (
    <select
      className={styles.locationSelect}
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      {options.map((item, i) => {
        if (category === "All") {
          return (
            <option value={item} selected>
              {item}
            </option>
          );
        } else {
          return (
            <option value={item} className={styles.opt}>
              {item}
            </option>
          );
        }
      })}
    </select>
  );
};

export default Select;
