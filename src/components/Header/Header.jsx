import React,{ useRef,useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import caretDown from "../../assets/icons/caretDown.svg";
import menuBar from "../../assets/icons/menuBar.svg";
import search from "../../assets/icons/search.svg";
import purple_b from "../../assets/purple_b.svg";
import purple_name from "../../assets/purple_name.svg";
import styles from "./Header.module.css";
const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const inputRef = useRef();
  const location = useLocation();
  const path = location.pathname;
  console.log(path); 

  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?search=${inputRef.current.value}`);
    }
  };
  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const navLinks = [
    {
      text: "Events",
      link: "/events",
    },
    {
      text: "News",
      link: "/blog",
      dropdown: [
        {
          text: "Policy",
          link: "/blog/category?category=policy",
        },
        {
          text: "Social Governance",
          link: "/blog/category?category=social-governance",
        },
        {
          text: "Technology",
          link: "/blog/category?category=technology",
        },
        {
          text: "Investors",
          link: "/blog/category?category=investors",
        },
        {
          text: "White Papers",
          link: "/blog/category?category=technology",
        },
      ],
    },
    {
      text: "Companies",
      link: "/companies",
    },
    {
      text: "About Us",
      link: "/about",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <nav>
        <div className={`${styles.navContainer}`}>
          <div className={styles.navLeft}>
            <div className={styles.navLogo}>
              <Link to="/">
                <img src={purple_b} alt="logo" className={styles.logo_b} />
              </Link>
              <Link to="/">
                <img
                  src={purple_name}
                  alt="logo"
                  className={styles.logo_name}
                />
              </Link>
            </div>
            <div className={styles.mobileMenu}>
              <div className={styles.mobileMenuIcon}>
                <img src={menuBar} alt="" />
              </div>
            </div>
            <div className={styles.navLinks}>
              {navLinks.map((item, i) => {
                return (
                  <li
                    key={i}
                    className={`${styles.dropdown} ${
                      isDropdownOpen ? styles.open : ""
                    }`}
                    onClick={toggleDropdown}
                  >
                    <Link to={item.link}>
                      {item?.text}
                      {item?.dropdown && (
                        <img src={caretDown} alt="search icon" />
                      )}
                    </Link>

                    {item.dropdown && (
                      <ul className={styles.dropdownContent}>
                        {item?.dropdown?.map((item, i) => {
                          return (
                            <li key={i}>
                              <Link to={item.link}>{item.text}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </div>
          </div>
          <div className={styles.searchBar}>
            {path === "/" && (
              <div className={styles.navSearch}>
                <input
                  type="text"
                  ref={inputRef}
                  onKeyDown={handleKeyDown}
                  placeholder="Search for ESG news and more"
                />
                <img src={search} alt="search icon" />
              </div>
            )}
            <div className={styles.navSubscribe}>
              <a href="#subscribe">
                <button>Subscribe</button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
