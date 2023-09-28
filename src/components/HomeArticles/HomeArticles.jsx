import React from "react";
import styles from "./homearticles.module.css";
import time from "../../assets/images/time.svg";
import { useGetArticlesHomeQuery } from "../../redux/api/homeApi";
import { Base_url } from "../../utils/utils";

const HomeArticles = () => {
  const {
    data: esgData,
    isLoading: esgLoading,
    error: esgError,
  } = useGetArticlesHomeQuery('esg technology');
  const {
    data: policyData,
    isLoading: policyLoading,
    error: policyError,
  } = useGetArticlesHomeQuery('policy');
  const {
    data: socialData,
    isLoading: socialLoading,
    error: socialError,
  } = useGetArticlesHomeQuery('social governance');


  return (
    <div className={`${styles.homearticles} mainContainer`}>
      <div className={styles.articlesHeading}>Popular articles</div>
      <div className={styles.main}>
        <div className={styles.articleSection}>
          <div className={styles.articleSectionHeading}>
            <span>ESG Technology</span>
          </div>
          <div className={styles.articleContent1}>
            <div className={styles.card}>
              <img src={`${Base_url}${esgData?.blogs[0]?.images[0]?.image}`} alt="card" className={styles.cardImage} />
              <div className={styles.cardText}>
                <div className={styles.cardHeading}>
                  {esgData?.blogs[0]?.title}
                </div>
                <div className={styles.cardTime}>
                  <img src={time} alt="time icon" className={styles.cardTimeImage} />
                  <p>{esgData?.blogs[0]?.duration}-min read</p>
                </div>
              </div>
            </div>
            <hr className="hr" />
            {
              esgData?.blogs?.slice(1)?.map((e)=>(
            <div className={styles.subArticle}>
              <div className={styles.subarticleHeading}>
                {e?.title}
              </div>
              <div className={styles.cardTime}>
                <img src={time} alt="time icon" className={styles.cardTimeImage} />
                {e?.duration}-min read
              </div>
            </div>
              ))
            }
          </div>
        </div>
        <div className={styles.articleSection}>
          <div className={styles.articleSectionHeading}>
            <span>Policy</span>
          </div>
          <div className={styles.articleContent1}>
            <div className={styles.card}>
              <img src={`${Base_url}${policyData?.blogs[0]?.images[0]?.image}`} alt="card" className={styles.cardImage} />
              <div className={styles.cardText}>
                <div className={styles.cardHeading}>
                {policyData?.blogs[0]?.title}
                </div>
                <div className={styles.cardTime}>
                  <img src={time} alt="time icon" className={styles.cardTimeImage} />
                  <p>{policyData?.blogs[0]?.duration}-min read</p>
                </div>
              </div>
            </div>
            <hr/>
            {
              policyData?.blogs?.slice(1)?.map((e)=>(
            <div className={styles.subArticle}>
              <div className={styles.subarticleHeading}>
                {e?.title}
              </div>
              <div className={styles.cardTime}>
                <img src={time} alt="time icon" className={styles.cardTimeImage} />
                {e?.duration}-min read
              </div>
            </div>
              ))
            }
          </div>
        </div>
        <div className={styles.articleSection}>
          <div className={styles.articleSectionHeading}>
            <span>Social Governance</span>
          </div>

          <div className={styles.reform}>
          <div className={styles.card}>
              <img src={`${Base_url}${socialData?.blogs[0]?.images[0]?.image}`} alt="card" className={styles.cardImage} />
              <div className={styles.cardText}>
                <div className={styles.cardHeading}>
                {socialData?.blogs[0]?.title}
                </div>
                <div className={styles.cardTime}>
                  <img src={time} alt="time icon" className={styles.cardTimeImage} />
                  <p>{socialData?.blogs[0]?.duration}-min read</p>
                </div>
              </div>
            </div>
          {
            socialData?.blogs?.slice(1)?.map((e)=>(
            <div className={styles.subArticle}>
              <div className={styles.subarticleHeading}>
                {e?.title}
              </div>
              <div className={styles.cardTime}>
                <img src={time} alt="time icon" className={styles.cardTimeImage} />
                {e?.duration}-min read
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeArticles;
