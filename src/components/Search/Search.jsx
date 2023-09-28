import React, { useState } from "react";
import styles from "./search.module.css";
import SArticleCard from "../SearchArticleCard/SArticleCard";
import SPopularCard from "../SearchPopularCard/SPopularCard";
import NewsLetter from "../Newsletter/NewsLetter"
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
// import data from "../../helpers/cardData"
import GlossaryCard from "../GlossaryCard/GlossaryCard";
import glossaryData from "../../helpers/glossaryData"
import SubscriberSec from "../SubscriberSec/SubscriberSec"

const Search = ({data}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [glossaryCurrentPage, setGlossaryCurrentPage] = useState(1);
  const totalPages = Math.ceil(data?.length/6);
  const totalGlossaryPages = Math.ceil(data?.length/4);
  
  return (
    <div className={styles.search}>
      <div className={styles.searchHeading}>
        Showing results for ‘ESG Policy News’
      </div>
      <div className={styles.main}>
        <div className={styles.article}>
          <div className={styles.articleHeading}>
            <span className={styles.border}>Articles</span>
          </div>
          <div className={styles.mainArticles}>
          {data.slice((currentPage - 1) * 6, (currentPage - 1) * 6 + 6).map((e) => (
          <SArticleCard item={e} />
          ))}
          </div>
          <div className={styles.pagination}>
          <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
      previousLabel={"< Prev"}
      nextLabel={"Next >"}
      previousClassName={styles.prevButton}    
      nextClassName={styles.nextButton} />
          </div>
          <div className={styles.glossary}>
          <div className={styles.glossaryHeading}>
        <span className={styles.glossaryHeadingText}>
        Glossary
        </span>
        </div>
        {glossaryData.slice((glossaryCurrentPage - 1) * 4, (glossaryCurrentPage - 1) * 4 + 4).map((e) => (
          <GlossaryCard item={e} />
        ))}
        <div className={styles.pagination}>

          <ResponsivePagination
      current={glossaryCurrentPage}
      total={totalGlossaryPages}
      onPageChange={setGlossaryCurrentPage}
      previousLabel={"< Prev"}
      nextLabel={"Next >"}
      previousClassName={styles.prevButton}    
      nextClassName={styles.nextButton}
      />
          </div>
          </div>
        </div>
        <div className={styles.popular}>
          <div className={styles.popularArticles}>
            <div className={styles.popularTitle}>
            Popular articles
            </div>
            <div className={styles.popularItems}>
            {
              Array(5).fill(0).map(()=>(
              <SPopularCard/>
              ))
            }
            </div>
          </div>
          <div className={styles.newsletter}>
              <NewsLetter/>
          </div>
        </div>
      </div>
      <SubscriberSec/>
    </div>


  );
};

export default Search;
