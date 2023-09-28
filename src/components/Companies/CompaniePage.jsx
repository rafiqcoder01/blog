import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import search from "../../assets/icons/search.svg";
import tag from "../../assets/icons/tag.svg";
import dot from "../../assets/images/blackDot.svg";
import greenTick from "../../assets/images/green-tick.svg";
import img from "../../assets/images/img5.png";
import time from "../../assets/images/time.svg";
import redCross from "../../assets/images/x.svg";

import {
  useGetCompaniesQuery,
  useGetCompanyCategoryQuery,
  useGetCompaniesSearchQuery,
  useGetFilterCompanyQuery,
  useGetCompaniesMoreQuery,
  useGetCompaniesTrendingQuery
} from "../../redux/api/companyApi";
import SubscriberSec from "../SubscriberSec/SubscriberSec";
import styles from "./companies.module.css";
import Spinner from "../Spinner/Spinner";
import { Base_url } from "../../utils/utils";

const CompaniePage = () => {
  const [companyArr, setCompanyArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inp, setInp] = useState("");
  const [type, setType] = useState("");

  const {
    data: companyData,
    isLoading: companyLoading,
    error: companyError,
  } = useGetCompaniesQuery(currentPage);

  const {
    data: companyMoreData,
    isLoading: companyMoreLoading,
    error: companyMoreError,
  } = useGetCompaniesMoreQuery();

  console.log("Company More Data",companyMoreData)
  
  const {
    data: companyTrendingData,
    isLoading: companyTrendingLoading,
    error: companyTrendingError,
  } = useGetCompaniesTrendingQuery();

  console.log("Company Trending Data",companyTrendingData)
  
  const { data: filterData } = useGetFilterCompanyQuery(type);

  const { data: searchData } = useGetCompaniesSearchQuery(inp);

  useEffect(() => {
    if (inp !== "") {
      setCompanyArr(searchData?.results);
    } else if (type !== "") {
      setCompanyArr(filterData?.results);
    } else {
      setCompanyArr(companyData?.results);
    }
  }, [companyData, searchData, filterData]);

  const { data: categoryData } = useGetCompanyCategoryQuery();

  const totalPages = Math.ceil(companyData?.count / 10);
  //import company api from rtk query
  if (companyError) {
    console.error(companyError);
  }

    return (
    <div className={`${styles.companies} mainContainer`}>
    {
      companyLoading ? <Spinner/> : 
      <>
      <div className={styles.top}>
        <div className={styles.report}>
          <div className={styles.mainTitle}>Companies ESG Reports 2023</div>
          <div className={styles.filter}>
            <div className={styles.select}>
              <label htmlFor="">Industry : </label>
              <select
                name=""
                id=""
                defaultValue={""}
                defaultChecked={"all"}
                className={styles.selectContainer}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">All</option>
                {categoryData?.map((e) => (
                  <option key={e?.id} value={e?.id}>
                    {e?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.searchBar}>
              <img src={search} alt="Search Icon" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Find Companies "
                onChange={(e) => setInp(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.companyList}>
            <div className={styles.companyHeader}>
              <div className={styles.title}>Company</div>
              <div className={styles.title1}>GRI</div>
              <div className={styles.title1}>SASB</div>
              <div className={styles.title1}>CDP</div>
              <div className={styles.title1}>TCFD</div>
              <div className={styles.title5}>ESG Report</div>
            </div>

            {companyArr?.length === 0 ||
              searchData?.results?.length === 0 ||
              filterData?.results?.length === 0 ? (
              <div className={styles.noResults}>No Results</div>
            ) : (
              companyArr?.map((e, i) => (
                <>
                  <div className={styles.nameCol} key={e?.id}>
                    <div className={styles.nameContainer}>
                      <div className={styles.companyLogo}>
                        <img className={styles.c_logo} alt="" src={e?.logo} />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.cName}>{e?.name}.</div>
                        <div className={styles.cCat}>{e?.category}</div>
                      </div>
                    </div>
                    <img
                      className={styles.tikIcon}
                      alt=""
                      src={e?.GRI ? greenTick : redCross}
                    />
                    <img
                      className={styles.tikIcon}
                      alt=""
                      src={e?.SASB ? greenTick : redCross}
                    />
                    <img
                      className={styles.tikIcon}
                      alt=""
                      src={e?.CDP ? greenTick : redCross}
                    />
                    <img
                      className={styles.tikIcon}
                      alt=""
                      src={e?.TCDF ? greenTick : redCross}
                    />
                    <div className={styles.link}>
                      <a href={e?.esg_report}>
                        <div className={styles.view}>View</div>
                      </a>
                    </div>
                  </div>
                  <div className={styles.borderBottom} />
                </>
              ))
            )}
          </div>

          <div className={styles.eventsPagination}>
          {
            companyArr?.length!==0 && 
          
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
              previousLabel={"< Prev"}
              nextLabel={"Next >"}
              previousClassName={styles.prevButton}
              nextClassName={styles.nextButton}
            />
            }
          </div>
        </div>
        <div className={styles.trending}>
          <div className={styles.posts}>
            <div className={styles.postHeading}>Trending posts</div>
            {companyTrendingData?.blogs?.map((e) => (
              <div className={styles.post} >
                <div className={styles.postTitle}>{e?.title}</div>
                <div className={styles.postInfo}>
                  <div className={styles.tag}>
                    <img src={tag} alt="tag" />
                    <p>{e?.categories}</p>
                  </div>
                  <li>
                    <span>{e?.tags[0]?.tag}</span>
                  </li>
                  <div className={styles.time}>
                    <img src={time} alt="time" />
                    <p>{e?.duration} min Read</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.featured}>
            <div className={styles.featuredHeading}>Featured this week</div>
            <div style={{cursor : "pointer"}}>
            <img src={`${Base_url}${companyTrendingData?.blogs[0]?.images[0]?.image}`} width={400} alt="windmill" />
            <div className={styles.featuredTitle}>
              {companyTrendingData?.blogs[0]?.title}
            </div>
            <div className={styles.featuredSubtitle}>
              <div className={styles.subName}>{companyTrendingData?.blogs[0]?.publisher_name}</div>
              <img src={dot} alt="dot" />
              <span className={styles.featuredTime}>
                <img src={time} alt="time" />
                2-min Read
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.more}>
        <div className={styles.moreHeading}>More on ESG reporting</div>
        <div className={styles.moreCards}>
          {companyMoreData?.blogs?.slice(0,3)?.map((e) => (
            <div className={styles.moreCard} key={e?.id}>
              <img src={`${Base_url}${e?.images[0]?.image}`} alt="windmill" width={424}/>
              <div className={styles.moreText}>
                <div className={styles.moreTitle}>{e?.title}</div>
                <div className={styles.moreSubtitle}>
                  <div className={styles.moreName}>{e?.publisher_name}</div>
                  <img src={dot} alt="dot" />
                  <div className={styles.time}>
                    <img src={time} alt="time" />
                    <p>{e?.duration} min Read</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SubscriberSec />
      </>
    }
    </div>
  );
};

export default CompaniePage;
