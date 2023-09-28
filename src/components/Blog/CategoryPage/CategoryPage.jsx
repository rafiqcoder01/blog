import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useLocation, useNavigate } from "react-router-dom";
import time from "../../../assets/images/time.svg";
import image1 from "../../../assets/images/windmill.png";
import { useGetCategoryBlogsQuery } from "../../../redux/api/bogApi";
import Spinner from "../../Spinner/Spinner";
import Post from "../Post/Post";
import SideCard from "../SideCard/SideCard";
import styles from "./CategoryPage.module.css";
const CategoryPage = () => {
  const [category, setCategory] = useState("energy"); // ["policy","social-governance","technology","investors","white-papers"
  const location = useLocation();
  const { data,error,isLoading } = useGetCategoryBlogsQuery(category);
  const navigate = useNavigate();
  useEffect(() => {
    setCategory(location.search.split("=")[1]);
  }, [location]);
  console.log(data);

  console.log(category);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data?.no_of_blogs / 6);

  if (isLoading) return <Spinner></Spinner>;
  if (error) return <div>{error}</div>;

  const goToDetails = (id) => {
    navigate(`/blog/${id}`);
  }
  return (
    <div className={styles.container}>
      <div className={styles.articleSectionHeading}>
        <span>ESG Technology</span>
      </div>
      <div className={styles.recentPost}>
        <div className={styles.sideCardContainer}>
          {data.blogs
            .slice((currentPage - 1) * 6, (currentPage - 1) * 6 + 6)
            .map((item, i) => {
              return (
                <div className={styles.borderContainer} key={i} onClick={()=> goToDetails(item.id)}>
                  <SideCard data={item}></SideCard>
                </div>
              );
            })}
        </div>
        <div className={styles.PostsSec}>
          {data.blogs.map((item, i) => {
            return (
              <div
                className={styles.cardBorder}
                key={i}
                onClick={() => goToDetails(item.id)}
              >
                <Post post={item} key={i}></Post>
              </div>
            );
          })}
        </div>
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
    </div>
  );
};

export default CategoryPage;
