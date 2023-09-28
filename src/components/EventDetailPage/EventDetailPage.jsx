import React, { useRef } from "react";
import styles from "./eventDetailPage.module.css";
import search from "../../assets/icons/search.svg";
import img1 from "../../assets/images/img1.png";
import dot from "../../assets/images/Dot.svg"
import linkedin from "../../assets/icons/linkedindark.svg"
import twitter from "../../assets/icons/twitterdark.svg"
import fb from "../../assets/icons/fbdark.svg"
import mail from "../../assets/icons/mail.svg"
import link from "../../assets/icons/link.svg"
import { useNavigate, useParams } from "react-router-dom";
import { useGetEventDetailQuery } from "../../redux/api/eventsApi";
import { FacebookShareButton } from "react-share";
import { Base_url } from "../../utils/utils";

const EventDetailPage = () => {
  const { id } = useParams();
  const { data,error,isLoading } = useGetEventDetailQuery(id);
  const inputRef = useRef();

    const navigate = useNavigate();

    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        navigate(`/search?search=${inputRef.current.value}`);
      }
  };
  console.log("data:", data);
  console.log("id:", id);
  const icons = [
    {
      img : linkedin,
      alt : "Linkedin"
    },
    {
      img : twitter,
      alt : "Twitter"
    },
    {
      img : fb,
      alt : "FaceBook"
    },
    {
      img : mail,
      alt : "Mail"
    },
    {
      img : link,
      alt : "Link"
    },
  ]
  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  
  return (
    <div className={`${styles.eventdetailpage} mainContainer`}>
      <div className={styles.heading}>Upcoming ESG events</div>
      <div className={styles.subHeading}>
        <div className={styles.text}>
          <span className={styles.text1}>Events</span>
          <span> / </span>
          <span>{data.event}</span>
        </div>
        <div className={styles.searchBar}>
          <img src={search} alt="Search Icon" />
          <input
            type="text"
            ref={inputRef}
            onKeyDown={handleKeyDown}
            placeholder="Search events and venues..."
          />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={`${Base_url}${data.image}`} alt="No img Found" width={652} />
          </div>
          <div className={styles.cardText}>
            <div className={styles.overview}>{data && data.event}</div>
            <div className={styles.desc}>{data && data.about_event}</div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoTitle}>Energy Next Symposium 2023</div>
          <div className={styles.infoSubtitle}>
            <span className={styles.by}>by</span>
            <span>42 acres</span>
            <img src={dot} alt="Dot" />
            <div className={styles.free}>Free</div>
          </div>
          <div className={styles.register}>
            <button>Register</button>
          </div>
          <div className={styles.share}>
            <div className={styles.shareText}>Share :</div>
            {icons.map((e) => (
              <>
                <img src={e.img} alt={e.alt} />
              </>
            ))}
            <FacebookShareButton quote={data.event} />
          </div>
          <div className={styles.date}>
            <div className={styles.dateTitle}>Date</div>
            <p>{data.date_posted?.slice(0, 10)}</p>
          </div>
          <div className={styles.location}>
            <div className={styles.locationTitle}>Location</div>
            <p>{data.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
