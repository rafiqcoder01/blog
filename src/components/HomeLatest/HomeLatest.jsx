import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import leftArrow from "../../assets/images/chevron-left.svg";
import greenTick from "../../assets/images/green-tick.svg";
import arrowRight from "../../assets/images/arrow-right.svg"
import purpleTick from "../../assets/images/purpleTick.svg";
import redCross from "../../assets/images/x.svg";
import NewsLetter from "../Newsletter/NewsLetter";
import styles from "./homelatest.module.css";
import { Base_url } from "../../utils/utils";

import {
  useGetCompaniesHomeQuery,
  useGetCarouselHomeQuery
} from "../../redux/api/homeApi";
import { Link } from "react-router-dom";

const HomeLatest = () => {

  const [currentSlide,setCurrentSlide] = useState(0)

  console.log(currentSlide)
  const {
    data: companyData,
    isLoading: companyLoading,
    error: companyError,
  } = useGetCompaniesHomeQuery();

  const {
    data: carouselData,
    isLoading: carouselLoading,
    error: carouselError,
  } = useGetCarouselHomeQuery()

  console.log(carouselData)

console.log(companyData)
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };

  const indicatorStyles = {
    background: "#fff",
    width: 8,
    height: 8,
    borderRadius: 10,
    display: "inline-block",
    margin: "0 8px",
    marginBottom: "10px",
  };
  return (
    <div className={`${styles.homeLatest} mainContainer`}>
      <div className={styles.latestLeft}>
        <h1 className={styles.heading}>Latest From ESG Bites</h1>
        <div className={styles.carouselDiv}>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          showStatus={false}
          onChange={(e)=>{
            setCurrentSlide(e)
          }}
          statusFormatter={(current, total) =>{
            return `Current slide: ${current} / Total: ${total}`
          }
          }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <div
                className=""
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  left: 15,
                  transform: "Rotate(180deg)",
                }}
              >
                <img src={leftArrow} alt="right arrow" />
              </div>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <div
                className=""
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, right: 15 }}
              >
                <img src={leftArrow} alt="left arrow" />
              </div>
            )
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  style={{ ...indicatorStyles, background: "#00A3FF" }}
                  aria-label={`Selected: ${label} ${index + 1}`}
                  title={`Selected: ${label} ${index + 1}`}
                />
              );
            }
            return (
              <li
                style={indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          {carouselData?.blogs?.map((e) => (
            <div className="">
              <img
                src={`${Base_url}${e?.images[0]?.image}`}
                alt="carousel"
                className={styles.carousel__image}
              />
              <p className={styles.caption}>{e?.title}</p>
            </div>
          ))}
        </Carousel>
        </div>
        <div className={styles.latestLeftText}>
          <p className="">
            {carouselData?.blogs[currentSlide]?.content?.length > 300 ? carouselData?.blogs[currentSlide]?.content?.slice(0,300) + "..." : carouselData?.blogs[currentSlide]?.content}
          </p>
          <div className={styles.points}>
          {carouselData?.blogs[currentSlide]?.keybites?.map((e)=>(
            <div className={styles.point}>
              <span className={styles.pointImage}>
                <img src={purpleTick} alt="green tick" />
              </span>
              <p>
                {e?.length > 50 ? e?.slice(0,50) + "..." : e}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
      <div className={styles.latestRight}>
        <h2 className={styles.rightHeading}>Companies ESG Report 2023</h2>

        <div className={styles.esgtablecontainer}>
          <div className={styles.tablehead}>
            <div className={styles.title}>Company</div>
            <div className={styles.title1}>GRI</div>
            <div className={styles.title1}>SASB</div>
            <div className={styles.title1}>CDP</div>
            <div className={styles.title1}>TCFD</div>
          </div>
          {companyData?.results?.slice(0,5)?.map((e, i) => (
            <div className={styles.datarow} key={i}>
              <div className={styles.namecontainer}>
                <div className={styles.name}>{e?.name}</div>
                <div className={styles.sub}>{e?.acronym}</div>
              </div>
              <img
                className={styles.icon}
                alt=""
                src={e?.GRI ? greenTick : redCross}
              />
              <img
                className={styles.icon}
                alt=""
                src={e?.SASB ? greenTick : redCross}
              />
              <img
                className={styles.icon}
                alt=""
                src={e?.CDP ? greenTick : redCross}
              />
              <img
                className={styles.icon}
                alt=""
                src={e?.TCFD ? greenTick : redCross}
              />
            </div>
          ))}
          <div className={styles.viewAllParent}>
          <Link to="/companies">

            <div className={styles.viewAll}>View all</div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src={arrowRight}
            />
          </Link>
          </div>
        </div>

        <NewsLetter />
      </div>
    </div>
  );
};

export default HomeLatest;
