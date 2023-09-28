import React, { useEffect, useRef, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/events.module.css";
import search from "../assets/icons/search.svg";
import Spinner from "../components/Spinner/Spinner";
import { SubscriberSec, UpcomingCard } from "../components/index";
import {
  useGetCategoryEventsQuery,
  useGetEventsQuery,
  useGetSearchEventsQuery,
} from "../redux/api/eventsApi";

const Events = () => {
  const [category, setCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: searchData1,
    error: searchError,
    isLoading: searchIsLoading,
  } = useGetSearchEventsQuery(searchValue, currentPage);
  const { data, error, isLoading } = useGetEventsQuery();
  const {
    data: categoryData,
    error: categoryError,
    isLoading: categoryIsLoading,
  } = useGetCategoryEventsQuery({currentPage, category});
  const [events, setEvents] = useState([]);

  const totalPages = Math.ceil(events?.no_of_events / 12);
  const navigate = useNavigate();

  const inputRef = useRef();


  const handleKeyDown = (event) => {
    setSearchValue(inputRef.current.value);
  };



  useEffect(() => {
    if (searchValue === "" && category === "All") {
      setEvents(data);
    } else if (searchValue !== "" && category === "All") {
      setEvents(searchData1);
    } else if (searchValue === "" && category !== "All") {
      setEvents(categoryData);
    } else if (searchValue !== "" && category !== "All") {
      setEvents(searchData1);
    }
  },[data,searchData1,categoryData,searchValue,category]);
  

  


console.log("events:",events);


  if (isLoading || categoryIsLoading || searchIsLoading) {
    return <Spinner />;
  }
  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }
  console.log("searchData1:", searchData1);

  console.log("category:", category);
  console.log("categoryData:",categoryData);

    console.log("evernts:",events);


  const GoToDetail = (id = 6) => {
    navigate(`/events/${id}`);
  };

  const locations = [
    "All",
    "Australia",
    "Brisbane, Queensland",
    "Perth, Western Australia",
    "Sydney, New South Wales",
    "United States",
    "Atlanta, Georgia",
    "Boston, Massachusetts",
    "Chicago, Illinois",
    "Houston, Texas",
    "Las Vegas, Nevada",
    "Los Angeles, California",
    "Miami, Florida",
    "New York City, New York",
    "San Francisco, California",
    "Seattle, Washington",
  ];

  return (
    <div className={`${styles.events} mainContainer`}>
      <div className={styles.eventsHeading}>Upcoming ESG events</div>
      <div className={styles.eventsFilter}>
        <div className={styles.location}>
          <span className={styles.locationText}>Location : </span>
          <select
            className={styles.locationSelect}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {locations?.map((item, i) => {
              if (category === "All") {
                return (
                  <option value={item} key={i}>
                    {item}
                  </option>
                );
              } else if (category !== "All") {
                return (
                  <option value={item} key={i}>
                    {item}
                  </option>
                );
              } else if (category !== "All") {
                <option value={item}>{item}</option>;
              } else if (item === "Australia") {
                return <optgroup label="Australia"></optgroup>;
              } else if (item === "United States") {
                return <optgroup label="United States"></optgroup>;
              }
            })}
          </select>
        </div>
        <div className={styles.fees}>
          <span className={styles.locationText}>Fees : </span>
          <select className={styles.locationSelect}>
            <option value="" defaultChecked>
              All
            </option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>
        <div className={styles.searchBar}>
          <img src={search} alt="Search Icon" />
          <input
            type="text"
            ref={inputRef}
            onChange={handleKeyDown}
            placeholder="Search for ESG news and more"
          />
        </div>
      </div>
      <div className={styles.eventsCard}>
        {events?.events
          ?.slice((currentPage - 1) * 12, (currentPage - 1) * 12 + 12)
          ?.map((item, i) => (
            <div onClick={() => GoToDetail(item.id)} key={item.id}>
              <UpcomingCard item={item} />
            </div>
          ))}
      </div>
      <div className={styles.eventsPagination}>
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
          previousLabel={"< Prev"}
          nextLabel={"Next >"}
          previousClassName={styles.prevButton}
          nextClassName={styles.nextButton}
        />
      </div>
      <SubscriberSec />
    </div>
  );
};

export default Events;
