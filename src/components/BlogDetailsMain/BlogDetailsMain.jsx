import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";

import BlogDetailsLeft from "./BlogDetailsLeft/BlogDetailsLeft";
import styles from "./BlogDetailsMain.module.css";
import DetailsRight from "./DetailsRight/DetailsRight";
import { useGetBlogDetailsQuery } from "../../redux/api/bogApi";
import Spinner from "../Spinner/Spinner";

const BlogDetailsMain = () => {
  const scrollRef = useRef(null);
  const { id } = useParams();

  const { data, error, isLoading } = useGetBlogDetailsQuery(id);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (scrollRef.current) {
        scrollRef.current.style.width = `${scrolled}%`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }




  return (
    <div className={styles.detailsContainer}>
      <div className={styles.progress} ref={scrollRef}></div>
      <BlogDetailsLeft details={data} />
      <DetailsRight />
    </div>
  );
};

export default BlogDetailsMain;
