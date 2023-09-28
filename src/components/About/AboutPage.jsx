import React from "react";
import styles from "./aboutpage.module.css";
import team from "../../assets/images/team.png";
import valLog1 from "../../assets/icons/valLog1.svg";
import valLog2 from "../../assets/icons/valLog2.svg";
import valLog3 from "../../assets/icons/valLog3.svg";
import valLog4 from "../../assets/icons/valLog4.svg";
import valLog5 from "../../assets/icons/valLog5.svg";
import tag from "../../assets/icons/tag.svg"
import time from "../../assets/images/time.svg"
import windmill from "../../assets/images/windmill.png"
import dot from "../../assets/images/blackDot.svg"
import SubscriberSec from "../SubscriberSec/SubscriberSec";

const AboutPage = () => {
  const values = [
    {
      logo: valLog1,
      title: "Integrity",
      desc: "We uphold the highest standards of honesty and accuracy. Our commitment to integrity ensures that our readers can trust the information they find on ESGBites.",
    },
    {
      logo: valLog2,
      title: "Impact",
      desc: "We aim to empower our readers with information that inspires meaningful actions and contributes to positive societal and environmental impact.",
    },
    {
      logo: valLog3,
      title: "Inclusivity",
      desc: "Sustainability is a collective effort spanning across cultures, industries, and backgrounds. We celebrate diversity and work towards making our content accessible to everyone.",
    },
    {
      logo: valLog4,
      title: "Curiosity",
      desc: "We thrive on curiosity and the pursuit of knowledge. Our team is dedicated to continuous learning, and staying updated on the latest developments.",
    },
    {
      logo: valLog5,
      title: "Collaboration",
      desc: "We actively seek collaborative partnerships with experts, organizations, and individuals who share our vision for a better world.",
    },
  ];

  const posts = [
    {
      text : "ESG-driven Industrial Reforms: Redefining Business Models for a Sustainable Economy",
      tag : "Policy",
      type : "Social Governance",
      read : "9-min read"
    },
    {
      text : "ESG-driven Industrial Reforms: Redefining Business Models for a Sustainable Economy",
      tag : "Policy",
      type : "Social Governance",
      read : "9-min read"
    },
    {
      text : "ESG-driven Industrial Reforms: Redefining Business Models for a Sustainable Economy",
      tag : "Policy",
      type : "Social Governance",
      read : "9-min read"
    },
    {
      text : "ESG-driven Industrial Reforms: Redefining Business Models for a Sustainable Economy",
      tag : "Policy",
      type : "Social Governance",
      read : "9-min read"
    },
    {
      text : "ESG-driven Industrial Reforms: Redefining Business Models for a Sustainable Economy",
      tag : "Policy",
      type : "Social Governance",
      read : "9-min read"
    },
  ]

  return (
    <>
    <div className={styles.about}>
      <div className={styles.left}>
        <div className={styles.aboutHeading}>
          About ESGBites: Nourishing Insights for a Sustainable Tomorrow
        </div>
        <div className={styles.vision}>
          <div className={styles.visionTitle}>Our Vision</div>
          <div className={styles.visionText}>
            At ESGBites, we envision a world where individuals, organizations,
            and communities collaborate to create a harmonious balance between
            economic progress, social well-being, and environmental
            preservation.
            <br />
            We believe that by promoting transparency, responsible business
            practices, and inclusive development, we can collectively pave the
            way for a brighter, more equitable future.
          </div>
        </div>
        <div className={styles.story}>
          <div className={styles.storyHeading}>Our Story</div>
          <div className={styles.storyText}>
            The story of ESGBites began with a group of passionate
            sustainability advocates who recognized the need for a centralized
            platform dedicated to ESG matters. Witnessing the growing demand for
            accurate and accessible information on environmental, social, and
            governance topics, we embarked on a journey to create a hub that
            would cater to both experts and newcomers in the field. Our
            commitment to spreading awareness and fostering understanding has
            been the driving force behind our platform's inception and
            evolution.
          </div>
          <img src={team} alt="team" />
          <div className={styles.value}>
            <div className={styles.valueHeading}>The Values That Guide Us</div>
            <div className={styles.valueItems}>
            {
                values.map((e,i)=>(

              <div className={styles.valueItem} key={i}>
                <div className={styles.valueTitle}>
                  <img src={e?.logo} alt="logo" />
                  <p>{e?.title}</p>
                </div>
                <div className={styles.valueDesc}>
                  {e?.desc}
                </div>
              </div>
                ))
            }
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.postHeading}>Trending posts</div>
        <div className={styles.posts}>
            {
              posts.map((e,i)=>(
                <div className={styles.post} key={i}>
              <div className={styles.postTitle}>
              {e?.text}
              </div>
              <div className={styles.postInfo}>
                <div className={styles.tag}>
                  <img src={tag} alt="tag" />
                  <p>{e?.tag}</p>
                </div>
                <li><span>{e?.type}</span></li>
                <div className={styles.time}>
                  <img src={time} alt="time" />
                  <p>{e?.read}</p>
                </div>
              </div>
            </div>
              ))
            }
          </div>
          <div className={styles.featured}>
            <div className={styles.featuredHeading}>
            Featured this week
            </div>
            <div style={{cursor : "pointer"}}>
            <img src={windmill} alt="windmill" width={350}/>
            <div className={styles.featuredTitle}>
            Sustainable and Equitable Investing: Embracing ESG for a Better Future
            </div>
            <div className={styles.featuredSubtitle}>
              <div className={styles.subName}>Sarah Williams</div>
              <img src={dot} alt="dot" />
              <span className={styles.featuredTime}><img src={time} alt="time" />2-min Read</span>
            </div>
            </div>
          </div>
      </div>
    </div>
      <SubscriberSec/>
    </>
  );
};

export default AboutPage;
