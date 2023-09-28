import React,{ useRef,useState } from 'react';
import styles from "./newsLetter.module.css";

const NewsLetter = () => {
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
        alert("valid");
      
    }
  }
  
  return (
    <div className={styles.cut}>
      <h2 className={styles.cutHeading}>
        Cut through the noise with our weekly newsletter
      </h2>
      <p className={styles.p1}>
        Stay up-to-date with the latest news & trends. Simple and direct
        information, delivered directly to your inbox.
      </p>
      <p className={styles.p1}>Join our community of 5,000+ members today.</p>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.rightInput}
          ref={inputRef}
          onChange={handleKeyDown}
        />
        <div className={styles.cutButton}>
          <button type="submit" className={styles.rightButton}  >I'm in</button>
          <span className={styles.sideButtonText}>
            It’s absolutely free. Seriously.
          </span>
        </div>
      </form>
    </div>
  );
}

export default NewsLetter