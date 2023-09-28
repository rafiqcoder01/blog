import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import viewArrow from "../../assets/images/viewArrow.svg";
import { useGetEventsQuery } from "../../redux/api/eventsApi";
import Spinner from "../Spinner/Spinner";
import styles from "./homeupcoming.module.css";
import UpcomingCard from "../UpComingCard/UpcomingCard";

const HomeUpcoming = () => {
  const {
    data: eventData,
    isLoading: eventLoading,
    error: eventError,
  } = useGetEventsQuery();

  const navigate = useNavigate();

  const goToDetails = (id) => {
    navigate(`/event/${id}`);
  };
  if (eventLoading)
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  if (eventError) return <div>{eventError}</div>;

  return (
    <div className={`${styles.homeupcoming} mainContainer`}>
      <div className={styles.top}>
        <p className={styles.heading}>Upcoming Events</p>
        <Link className={styles.headingView} to="/events">
          View all <img src={viewArrow} alt="view" />
        </Link>
      </div>
      <div className={styles.cards}>
        <Swiper
          style={{
            "--swiper-pagination-color": "#81298F",
            "--swiper-pagination-bullet-inactive-color": "#EBF0F0",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="upCommingSwiper"
        >
          {eventData?.events?.map((item, i) => (
            <SwiperSlide key={item?.id}>
              <UpcomingCard item={item} onClick={() => goToDetails(item.id)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeUpcoming;
