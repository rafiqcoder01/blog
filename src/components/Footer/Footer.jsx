import React,{ useRef,useState } from "react";
import { Link } from "react-router-dom";
import fb from "../../assets/icons/fb.svg";
import insta from "../../assets/icons/insta.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";
import purple_b from "../../assets/purple_b.svg";
import purple_name from "../../assets/purple_name.svg";
import styles from "./Footer.module.css";
const Footer = () => {
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
  const socialLinks = [
    {
      img: fb,
      link: "#",
    },
    {
      img: twitter,
      link: "#",
    },
    {
      img: insta,
      link: "#",
    },
    {
      img: linkedin,
      link: "#",
    },
  ];

  const linkItems = [
    {
      text: "About us",
      link: "about",
    },
    {
      text: "Terms & Conditions",
      link: "terms",
    },
    {
      text: "Privacy Policy",
      link: "privacy-policy",
    },
    {
      text: "Contact",
      link: "contact",
    },
  ];
  const newsLinks = [
    {
      text: "News",
      link: "news",
    },
    {
      text: "Events",
      link: "events",
    },
    {
      text: "Privacy Policy",
      link: "privacy-policy",
    },
    {
      text: "Sustainability Dictionary",
      link: "glossary",
    },
    
  ];

  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerContainer} mainContainer`}>
        <div className={styles.aboutContainer}>
          <div className={styles.footerLogo}>
            <Link to="/">
              <img src={purple_b} alt="logo" className={styles.logo_b} />
            </Link>
            <Link to="/">
              <img src={purple_name} alt="logo" className={styles.logo_name} />
            </Link>
          </div>

          <div className={styles.joinNewsletter}>
            <p>Join our weekly newsletter for the latest ideas and updates.</p>
            <form className={styles.newsLetterContainer} onSubmit={(e)=>handleSubmit(e)}>
              
                <input
                  type="email"
                  placeholder="Enter your email"
                
                  ref={inputRef}
                  onChange={handleKeyDown}
                />
              <button>Yes I'm in</button>
            </form>
          </div>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linkiconContainer}>
            {linkItems.map((e) => (
              <div className={styles.footerSection}>
                <Link to={`/${e?.link}`}>{e?.text}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linkiconContainer}>
            {newsLinks.map((e) => (
              <div className={styles.footerSection}>
                <Link to={`/${e?.link}`}>{e?.text}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.mobileJoinNewsletter}>
          <p>Join our weekly newsletter for the latest ideas and updates.</p>
          <div className={styles.newsLetterContainer}>
            <input type="email" placeholder="Enter your email address" />
            <button>Yes I'm in</button>
          </div>
        </div>
        <div className={styles.socialMediaContainer}>
          <p className={styles.aboutTitle}>Connect with us on</p>
          <div className={styles.connect}>
            {socialLinks.map((item, i) => (
              <a href={item.link} className={styles.socialMediaLink}>
                <img src={item.img} alt="social" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.copyrigthContainer}>© 2023 ESGbites, Inc.</div>
    </footer>
  );
};

export default Footer;
